import { Router } from "express";
import tarefasControllers from "../controllers/tarefaController";

const router = Router();

router.get("/", tarefasControllers.getTarefas);

router.get("/:id", tarefasControllers.getTarefa);

router.post("/", tarefasControllers.criarTarefa);

router.put("/:id", tarefasControllers.atualizarTarefa);

router.delete("/:id", tarefasControllers.deletarTarefa);

export default router;