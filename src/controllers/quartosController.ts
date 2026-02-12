import { Request, Response, NextFunction } from "express";
import quartoRepository from "../repositories/quartoRepository";

async function disponiveis(req: Request, res: Response, next: NextFunction){
    const {dataInicio, dataFim, quantidade} = req.body;{
        if (!dataInicio || !dataFim || !quantidade) {
            return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
        }
        const dados = {dataInicio, dataFim, quantidade};
        try{
            let quartos = await quartoRepository.disponiveis(dados);
            if (!quartos){throw new Error("Erro ao buscar quartos disponíveis");}
            
            for(let q of quartos){
                const fotos = await quartoRepository.buscarFotoPorQuartoId(q.id);
                q.fotos = fotos;
            }
            res.status(200).json(quartos);
        } catch(error){
            console.log(error);
            res.status(500).json({erro: "Erro ao buscar quartos disponíveis"});
        }
    
}
}

export default {
    disponiveis
};