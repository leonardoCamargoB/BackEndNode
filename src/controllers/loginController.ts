import { Request, Response, NextFunction } from "express";
import loginRepository from "../repositories/loginRepository";
import Login from "../models/login";

async function getLogins(req: Request, res: Response, next: NextFunction) {
  const result = await loginRepository.getLogins();
  res.json(result);
}
async function getLogin(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const result = await loginRepository.getLogin(parseInt(id));
  const status = result ? 200 : 404;
  res.status(status).json(result);
}

async function criarLogin(req: Request, res: Response, next: NextFunction) {
  const tarefa = req.body as Login;
  try {
    const result = await loginRepository.criarLogin(tarefa);
    return res.status(201).json(result);
  } catch (error) {
    console.log("error ao criar", error);
    return res.status(400).json({ erro: "dados imcompletos" });
  }
}

async function atualizarLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  const tarefa = req.body as Login;
  try {
    const result = await loginRepository.atualizarLogin(
      parseInt(id),
      tarefa,
    );
    return res.status(201).json(result);
  } catch (error) {
    console.log("error ao atualizar", error);
    return res.status(400).json({ erro: "dados incpompletos" });
  }
}

async function deletarlogin(req: Request, res: Response, next: NextFunction) {
  const {id} = req.params
  try{
    const result = await loginRepository.deletarlogin(parseInt(id))
    return res.status(201).json(result)
  }catch(error){
    console.log("Erro ao deletar", error)
    return res.status(400).json({erro:'erro ao deletar tarefa'})
  }
}

export default {
  getLogins,
  getLogin,
  criarLogin,
  atualizarLogin,
  deletarlogin,
};
