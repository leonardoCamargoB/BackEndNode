import { Router } from "express";
import quartosController from "../controllers/quartosController";

const router = Router();
console.log("Configurando rota de quartos...");

router.post("/", quartosController.disponiveis);

export default router;