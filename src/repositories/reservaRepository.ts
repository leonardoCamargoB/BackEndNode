import {pool} from '../dataBase/dataBase'
import { ResultSetHeader, RowDataPacket } from 'mysql2'

async function fazerPedido(data:any) {
    const sql = "INSERT INTO pedidos (usuario_id,pagamento) VALUES (?, ?)"


    try {
        const [result] = await pool.query<ResultSetHeader>(sql, [
            data.usuario_id,
            data.pagamento
        ]);
        return result.insertId;
    } catch (error) {
        console.error("Erro ao fazer pedido:", error);
    return null;
    }
}

async function fazerReserva(idPedido:number, quarto:any) {
    const sql = "INSERT INTO reservas (pedido_id, quarto_id, data_inicio, data_fim) VALUES (?, ?, ?, ?)"
    
    try{
        const [result] = await pool.query<ResultSetHeader>(sql, [
            idPedido,
            quarto.id,
            quarto.dataInicio,
            quarto.dataFim
        ]);
        return result.insertId;
    }catch (error) {
        console.error("Erro ao fazer reserva:", error);
    return null;
    }
}

export default {
    fazerPedido,
    fazerReserva
}