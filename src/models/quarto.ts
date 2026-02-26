import { RowDataPacket } from "mysql2";

export type Quartos = RowDataPacket &{
    id: number
    nome: string
    numero: number
    qtd_cama_casal: number
    qtd_cama_solteiro: number
    preco: number
    disponivel: number
}

export type QuartoReserva = {
    fim: string
    inicio: string
    quantidade: string
}