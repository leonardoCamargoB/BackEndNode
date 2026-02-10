import { NextFunction, Request, Response } from "express";
import pedidoRepository from "../repositories/pedidoRepository";

async function criarPedido(req: Request, res: Response, next: NextFunction){
    console.log("Criando pedido...");
    const {usuario_id, cliente_id,  pagamento} = req.body;

    if(!usuario_id || !cliente_id || !pagamento){
        return res.status(401).json({erro: "Todos os campos são obrigatórios"});
    }
    if(usuario_id.trim() === "" || cliente_id.trim() === ""  || pagamento.trim() === ""){
        return res.status(404).json({erro: "Os campos não podem ser vazios"});
    }

    try{
        await pedidoRepository.criarPedido({usuario_id, cliente_id, pagamento} as any);
        return res.status(200).json({
            mensagem: "Pedido criado com sucesso"
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({erro: "Erro ao criar pedido"});
    }   
}

export default {
    criarPedido
};