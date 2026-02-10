import {pool} from "../dataBase/dataBase";
import { reserva } from "../models/reserva";


async function criarReserva(reserva: reserva): Promise<void>{
    console.log("Criando reserva no banco de dados...");
    const sql = `INSERT INTO reservas (pedido_id, quarto_id, adicional_id, fim, inicio) VALUES (?, ?, ?, ?, ?)`;
        const [result] = await pool.query(sql, [reserva.pedido_id, reserva.quarto_id, reserva.adicional_id, reserva.fim, reserva.inicio
        ]);

        

}

export default {    
    criarReserva
}