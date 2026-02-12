import {pool} from "../dataBase/dataBase";
import { pedido } from "../models/pedido";

async function criarPedido(pedido: pedido): Promise<void>{
    console.log("Criando pedido no banco de dados...");
    const sql = `INSERT INTO pedidos (usuario_id, cliente_id, data, pagamento) VALUES (?, ?, ?, ?)`;
        const [result] = await pool.query(sql, [pedido.usuario_id, pedido.cliente_id,pedido.pagamento
        ]);
}
export default {
    criarPedido
}