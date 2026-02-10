import { NextFunction, Request, Response } from "express";
import { pool } from "../dataBase/dataBase";
import reservaRepository from "../repositories/reservaRepository";
import { reserva } from "../models/reserva";

async function criarReserva(req: Request, res: Response, next: NextFunction){
    console.log("Criando reserva...");
    const {pedido_id, quarto_id, adicional_id, fim, inicio} = req.body;

    if(!pedido_id || !quarto_id || !adicional_id || !fim || !inicio){
        return res.status(400).json({erro: "Todos os campos são obrigatórios"});
    }
    if(pedido_id.trim() === "" || quarto_id.trim() === "" || adicional_id.trim() === "" || fim.trim() === "" || inicio.trim() === ""){
        return res.status(400).json({erro: "Os campos não podem ser vazios"});
    }

    try{
        const novaReserva = await reservaRepository.criarReserva({pedido_id, quarto_id, adicional_id, fim, inicio} as reserva);
        return res.status(200).json({
            mensagem: "Reserva criada com sucesso",
            novaReserva
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({erro: "Erro ao criar reserva"});
    }

}

export default {
    criarReserva
};