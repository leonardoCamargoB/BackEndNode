import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();

// rora generica
app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

// rota de erro
app.use((err:Error, req:Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Erro na Requisição")
});

export default app;
