import { Request, Response, NextFunction } from "express";

async function criarLogin(req: Request, res: Response, next: NextFunction) {
  const login = req.body;
  try {
    console.log("criando login", login);
    return res.sendStatus(200)
  } catch (error) {
    console.log("error ao criar", error);
    return res.sendStatus(400);
  }
}



export default {
  criarLogin
};
