import { RowDataPacket}  from "mysql2";


export type cadastro = RowDataPacket & {
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    senha: string,
    cargo_id: number

}