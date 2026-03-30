import { Router } from "express";
import router from "./loginRouter"
import { createJWT } from "../utils/jwt";
import { middleware } from "./jwtMiddleware";
import rotaQuartos from "./quartoRouter";
import rotaReservas from "./reservaRouter";
import rotaLogin from "./loginRouter";

const handlerRouter = Router();

// rotas publicas
handlerRouter.use("/api/login", rotaLogin);
handlerRouter.use("/api/quartosDisponiveis", rotaQuartos);
// rotas privadas
handlerRouter.use("/api/reserva", middleware, rotaReservas);



export default handlerRouter