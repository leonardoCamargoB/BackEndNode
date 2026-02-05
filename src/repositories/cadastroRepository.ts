import {pool} from "../dataBase/dataBase";
import { cadastro } from "../models/cadastro";

async function criarCadastro(nome:string, cpf:string, telefone:string, email:string, senha:string, cargo_id:number): Promise<void>{
    const sql = `INSERT INTO clientes (nome, cpf, telefone, email, senha, cargo_id) VALUES (?, ?, ?, ?, ?, ?)`;
    await pool.query(sql, [nome, cpf, telefone, email, senha, cargo_id]);

}

export default {    
    criarCadastro
}