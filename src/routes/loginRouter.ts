import { Router, Request, Response } from "express";
import loginController from "../controllers/loginController";
import { log } from "console";

const router = Router();

router.post("/", loginController.criarLogin);

export default router;