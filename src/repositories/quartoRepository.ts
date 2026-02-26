import { pool } from "../dataBase/dataBase";
import { RowDataPacket } from "mysql2";
import { QuartoReserva, Quartos } from "../models/quarto";

async function disponiveis(pedido: QuartoReserva): Promise<Quartos[]> {
    const sql = `SELECT *
        FROM quartos q
        WHERE q.disponivel = 1
        AND (q.qtd_cama_casal * 2 + q.qtd_cama_solteiro) >= ?
        AND q.id NOT IN (
            SELECT r.quarto_id
            FROM reservas r
            WHERE (r.fim >= ? AND r.inicio <= ?)
        )`;

    const [quartos] = await pool.query<Quartos[]>(sql, [
        pedido.quantidade,
        pedido.fim,
        pedido.inicio,
    ]);

    return quartos; // sempre retorna array (mesmo que vazio)
}

/*async function buscarFotoPorQuartoId(id: number): Promise<string[]> {
    const sql = `SELECT F.nome
        FROM quartos_fotos QF
        JOIN fotos F ON QF.foto_id = F.id
        WHERE QF.quarto_id = ?`;

    const [fotos] = await pool.query<RowDataPacket[]>(sql, [id]);

    return fotos.map((foto) => foto.nome);
}*/

export default {
    disponiveis,
    //buscarFotoPorQuartoId,
};