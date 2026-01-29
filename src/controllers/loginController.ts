import { Request, Response, NextFunction } from "express";

async function criarLogin(req: Request, res: Response, next: NextFunction) {
  const login = req.body;
  try {
    console.log("criando login", login);
    return res.status(200).json(login);
  } catch (error) {
    console.log("error ao criar", error);
    return res.status(400).json({ erro: "dados imcompletos" });
  }
}



export default {
  criarLogin
};
