import {pool} from "../dataBase/dataBase"
import {ResultSetHeader, RowDataPacket } from "mysql2";

async function fazerPedido(data:any){
    const sql = `INSERT INTO pedidos (cliente_id, pagamento)
        VALUES (?, ?)`;
    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            data.cliente_id,
            data.pagamento
        ]);
        // apenas retorna o ID do novo pedido
        return result.insertId;
    } catch (err) {
        console.error('Erro ao criar pedido:', err);
        return null;
    }
}

async function fazerReserva(idPedido:number, quarto:any) {
    const sql = `INSERT INTO reservas (pedido_id, quarto_id, fim, inicio) 
    VALUES (?, ?, ?, ?)`

    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            idPedido,
            quarto.id,
            quarto.fim,
            quarto.inicio,
        ]);
        // apenas retorna o ID do novo pedido
        return result.insertId;
    } catch (err) {
        console.error('Erro ao reservar o quarto:', err);
        return null;
    }
    
}

export default{
    fazerPedido, fazerReserva
}