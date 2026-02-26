import { Request, Response, NextFunction } from "express";
import quartosRepository from "../repositories/quartoRepository";
import { corrigirDataHora } from "../utils/datahora";

async function disponiveis(req: Request, res: Response, next: NextFunction) {
    let {fim, inicio,  quantidade } = req.body;

    if (!fim|| !inicio   || !quantidade) {
        return res.status(400).json({ erro: "Preencha os campos para consulta" });
    }

    fim = await corrigirDataHora(fim, 12);
    inicio = await corrigirDataHora(inicio, 14);
    


    const dados = {  fim, inicio, quantidade };

    try {
        let quartos = await quartosRepository.disponiveis(dados);

        if (!quartos || quartos.length === 0) {
            return res.status(404).json({ erro: "Nenhum quarto disponível encontrado" });
        }

        /*await Promise.all(
            quartos.map(async (q: any) => {
                const fotos = await quartosRepository.buscarFotoPorQuartoId(q.id);
                q.fotos = fotos;
            })
        );*/

        return res.status(200).json(quartos);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: "Erro interno ao buscar os quartos" });
    }
}

export default {
    disponiveis
};