    import { Request, Response } from "express";
    import loginRepository from "../repositories/loginRepository";
    import {pool} from "../dataBase/dataBase";
    import cadastroRepository from "../repositories/cadastroRepository";
    import { createJWT } from "../utils/jwt";
    import { gerarSenha } from "../utils/senha";

    import {Login, dadosLogin} from "../models/login"
    import { QueryResult, ResultSetHeader} from "mysql2"

    async function validarLogin(email:string):Promise<Login|null>{
        const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, cargos.nome AS cargo
        FROM clientes 
        JOIN cargos ON cargos.id = clientes.cargo_id
        WHERE clientes.email = ? `
        
        const [rows] = await pool.query<Login[]>(sql, [email])
        return rows.length ? rows[0] : null
    }

    async function cadastrarLogin(dadosLogin:dadosLogin):Promise<Login|null>{
        const sql = `INSERT INTO clientes (nome, cpf, telefone, email, senha, cargo_id) VALUES (?, ?, ?, ?, ?, 2)`;
    
        const [result] = await pool.query<ResultSetHeader>(sql, [
            dadosLogin.nome,
            dadosLogin.cpf,
            dadosLogin.telefone,
            dadosLogin.email,
            dadosLogin.senha,
        ]);
        if (result.insertId){
            const resultado:Login  = {id:result.insertId, ...dadosLogin, cargo:"cliente"} as Login
            return resultado
        }
        return null;
    }


    export default{
        validarLogin, cadastrarLogin
    }