import { RowDataPacket } from "mysql2";

export type pedido = RowDataPacket & {
    usuario_id: number,
    cliente_id: number,
    pagamento : string
}
