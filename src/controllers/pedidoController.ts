import { NextFunction, Request, Response } from "express";
import pedidoRepository from "../repositories/pedidoRepository";

async function criarPedido(req: Request, res: Response, next: NextFunction){
    console.log("Criando pedido...");
    const {usuario_id, cliente_id, data, pagamento} = req.body;

    if (!usuario_id || !cliente_id || !data || !pagamento) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

    if (typeof usuario_id !== "number" || typeof cliente_id !== "number") {
        return res.status(400).json({ erro: "IDs devem ser números" });
    }

    if (data.trim() === "" || pagamento.trim() === "") {
        return res.status(400).json({ erro: "Campos não podem ser vazios" });
}


    try{
        await pedidoRepository.criarPedido({usuario_id, cliente_id, data, pagamento} as any);
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