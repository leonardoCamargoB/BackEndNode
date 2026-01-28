import { Router } from "express";
import loginController from "../controllers/loginController";

const router = Router();

router.post("/",()=>{
    console.log('ok')

});

export default router;
