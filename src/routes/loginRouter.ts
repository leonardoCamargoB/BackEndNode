import { Router, Request, Response } from "express";
import loginController from "../controllers/loginController";
import { log } from "console";


const router = Router();

router.post("/login", loginController.criarLogin);

export default router;