import { Router, Request, Response } from "express";
import loginController from "../controllers/loginController";
import { log } from "console";
import cadastroController from "../controllers/cadastroController";


const router = Router();

router.post("/", loginController.criarLogin);
router.post("/cadastro", cadastroController.criarCadastro);

export default router; 