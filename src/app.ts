import express from "express";
import { Request, Response, NextFunction } from "express";
import router from "./routes/loginRouter";

const app = express();
app.use(express.json());
app.use("/logim", router);

export default app;
