import express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());


app.get("/parametro/:nome", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.params.nome;
  console.log("Rota de parametro - Cliente digitou", nome);
  res.send(`você digitou o nome: ${nome}`);
});

app.get("/query", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.query.nome;
  console.log("Rota de parametro - Cliente digitou", nome);
  res.send(`você digitou o nome: ${nome}`);
});

app.get("/corpo", (req: Request, res: Response, next: NextFunction) => {
  const nome = req.body.nome;
  console.log("Variavel dentro do corpo - Cliente digitou", nome);
  res.send(`Variavel dentro do corpo - Você digitou o nome: ${nome}`);
});

app.get("/exemplo", (req: Request, res: Response, next: NextFunction) => {
  console.log("Aconteceu algo!!!");
  res.send("Rodou tudo certo meu chapa!");
});

// rota generica
app.use((req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

// rota de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Erro na Requisição");
});

export default app;
