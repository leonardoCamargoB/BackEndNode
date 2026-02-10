import { NextFunction, Request, Response } from "express";
import { pool } from "../dataBase/dataBase";
import { createJWT } from "../utils/jwt";
import bcrypt from "bcrypt";
import { gerarSenha } from "../utils/senha";
import cadastroRepository from "../repositories/cadastroRepository";


async function criarCadastro(req: Request, res: Response, next: NextFunction){
    const {nome, cpf, telefone, email, senha, cargo_id} = req.body;

    if(!nome || !cpf || !telefone || !email || !senha || !cargo_id){
        return res.status(400).json({erro: "Todos os campos são obrigatórios"});
    }
    
    if(nome.trim() === "" || cpf.trim() === "" || telefone.trim() === "" || email.trim() === "" || senha.trim() === "" || cargo_id === undefined){
        return res.status(400).json({erro: "Os campos não podem ser vazios"});
    }

    try{

        const senhaHash = await gerarSenha(senha);

        const token = await cadastroRepository.criarCadastro(nome, cpf, telefone, email, senhaHash, cargo_id);
    
        return res.status(200).json({
            mensagem: "Cadastro realizado com sucesso",
            token
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({erro: "Erro ao criar cadastro"});
    }
}

export default {
    criarCadastro
};
