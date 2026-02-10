import { RowDataPacket } from "mysql2";

export type reserva = RowDataPacket & {
    pedido_id: number,
    quarto_id: number,
    adicional_id: number,
    fim    : string,
    inicio : string
}
