import {Request, Response, NextFunction} from "express"
import reservaRespository from "../repositories/reservaRepository"
import {corrigirDataHora} from "../utils/datahora";


async function criarPedido(req:Request, res:Response, next:NextFunction) {
    const token = req.payload ;
    const {pagamento, quartos} = req.body;

    if (!token.id || !pagamento || !quartos){
        return res.status(401).json({erro: "Dados incompletos!"})
    }

    try {
        const dadosPedido = {
            cliente_id : token.id,
            pagamento : pagamento
        }
        // criar o Pedido
        const pedidoID = await reservaRespository.fazerPedido(dadosPedido);
        if (!pedidoID){throw new Error("Erro ao criar o Pedido")}
        
        //criar a reserva para cada um dos quartos
        let result = []
        for (let q of quartos){
            q.fim = await corrigirDataHora(q.fim, 14)
            q.inicio = await corrigirDataHora(q.inicio, 12)
            const reservaID = await reservaRespository.fazerReserva(pedidoID, q)
            if (!reservaID){continue}
            result.push({
                ...q,
                reservaID: reservaID,
            })
        }

        res.status(200).json({
            message:"Reserva feita com sucesso",
            pedidoID: pedidoID,
            reservas: result
        })


    } catch (error) {
        console.log(error)
        return res.status(402).json({erro: "Reserva não efetuada!"})
    }

}


export default{
    criarPedido
}