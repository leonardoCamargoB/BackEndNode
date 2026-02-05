import { Request, Response } from "express";
import { pool } from "../dataBase/dataBase";
import { createJWT } from "../utils/jwt";
import bcrypt from "bcrypt";

async function criarCadastro(req: Request, res: Response){
    const {nome, cpf, telefone, email, senha, cargo_id} = req.body;

    if(!nome || !cpf || !telefone || !email || !senha || !cargo_id){
        return res.status(400).json({erro: "Todos os campos são obrigatórios"});
    }

    try{
        // hash da senha
        const saltRounds = 10;
        const senhaHash = await bcrypt.hash(senha, saltRounds);

        const sql = `
            INSERT INTO clientes (nome, cpf, telefone, email, senha, cargo_id)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const [result] = await pool.query(sql, [
            nome,
            cpf,
            telefone,
            email,
            senhaHash, // senha já protegida
            cargo_id
        ]);

        // criar token JWT para o novo usuario
        const token = createJWT({
            id: (result as any).insertId,
            nome,
            email,
            cargo_id
        });

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
