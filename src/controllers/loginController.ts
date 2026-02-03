  import { error } from "console";
  import {Request, Response, NextFunction} from "express";
  import loginRepository from "../repositories/loginRepository";
  
  async function criarLogin(req: Request, res: Response, next:NextFunction){
    const {Email, senha} = req.body
    if(!Email || !senha){
      return res.status(400).json({erro:"Email e senha são obrigatorios"})
    }
  
    if(Email.trim() === "" || senha.trim() === ""){
      return res.status(400).json({erro: "Email e senha estão vazios"})
    
    }
  
    try{
      const result = await loginRepository.validarLogin(Email)
      if(!result){throw new Error()}
  
      console.log(result.email)
      console.log(result.senha)
      return res.sendStatus(200);
    }catch(error){
      return res.status(400).json({erro: "credenciais invalidas"})
    }
  
  
  
  }
  
  export default {
    criarLogin
  }
  