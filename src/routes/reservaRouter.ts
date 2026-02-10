import { Router } from "express";
import reservaController from "../controllers/reservaController";


const router = Router();
console.log("Configurando rota de reserva...");

router.post("/", reservaController.criarReserva);

export default router;