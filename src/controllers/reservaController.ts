import { Request, Response, NextFunction} from "express";
import reservaRepository from "../repositories/reservaRepository";

async function corrigitDataHora(data:string, hora: number) {
    let novaData = new Date(data);
    novaData.setHours(hora, 0, 0);
    return novaData;
}

export async function criarPedido(req: Request, res: Response , next: NextFunction) {

    const token = req.payload;
    const {pagamento, quartos} = req.body;

    if (!token.id || !pagamento || !quartos) {
        return res.status(400).json({ error: "Dados incompletos" });
    }

    try {
        const dadosPedido = {
            cliente_id: token.id,
            pagamento: pagamento,
        }
        const pedidoId = await reservaRepository.fazerPedido(dadosPedido);
            if (!pedidoId){throw new Error("Falha ao criar pedido");}

            let result =[]
            for (let q of quartos) {
            q.dataInicio = corrigitDataHora(q.dataInicio, 14);
            q.dataFim = corrigitDataHora(q.dataFim, 12);
            console.log(q);


            const reservaId = await reservaRepository.fazerReserva(pedidoId, q);
            if (!reservaId){continue}
            result.push({
                ...q,
                reservaId: reservaId
            })
    }
        console.log(result);
            res.status(200).json({
                message: "Pedido criado com sucesso",
                pedidoId: pedidoId
            })

    }catch (error) {
        console.error("Erro ao criar pedido:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }

    console.log(token);
    console.log(pagamento);
    console.log(quartos); 
    return res.sendStatus(200);
}

export default {
    criarPedido
}