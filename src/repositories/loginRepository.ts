import {pool} from "../dataBase/dataBase";

async function validarLogin(email:string) {
    const sql = `SELECT clientes.id, clientes.nome, clientes.email, clientes.senha, cargos.nome AS cargo FROM clientes  JOIN cargos ON cargos.id = clientes.cargo_id WHERE clientes.email = ?`;

    const [rows] = await pool.query(sql, [email]);
    return rows.length ? rows[0] : null;
}

export default {
    validarLogin
}