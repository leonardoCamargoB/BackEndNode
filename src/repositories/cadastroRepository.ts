import {pool} from "../dataBase/dataBase";
import { cadastro } from "../models/cadastro";
import { createJWT } from "../utils/jwt";

async function criarCadastro(nome:string, cpf:string, telefone:string, email:string, senha:string, cargo_id:number): Promise<void>{
    const sql = `INSERT INTO clientes (nome, cpf, telefone, email, senha, cargo_id) VALUES (?, ?, ?, ?, ?, ?)`;

        const [result] = await pool.query(sql, [nome,cpf,telefone,email,senha,cargo_id  // senha já protegidacargo_id
        ]);

        // criar token JWT para o novo usuario
        const token = createJWT({
            id: (result as any).insertId,
            nome,
            email,
            cargo_id
        });




}





export default {    
    criarCadastro
}