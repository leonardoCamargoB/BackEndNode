import { Router } from "express";
import pedidoController from "../controllers/pedidoController";

const router = Router();

console.log("Configurando rota de pedido...");

router.post("/", pedidoController.criarPedido);

export default router;