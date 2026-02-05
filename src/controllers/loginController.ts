  import { error } from "console";
  import {Request, Response, NextFunction} from "express";
  import loginRepository from "../repositories/loginRepository";
  import {validarSenha} from "../utils/senha";
  import { createJWT } from "../utils/jwt";
  
  async function criarLogin(req: Request, res: Response, next:NextFunction){
    const {email, senha} = req.body

    if(!email || !senha){
      return res.status(400).json({erro:"Email e senha são obrigatorios"})
    }
  
    if(email.trim() === "" || senha.trim() === ""){
      return res.status(401).json({erro: "Email e senha estão vazios"})
    }
  
    try{

      const resultEmail = await loginRepository.validarLogin(email)
      if(!resultEmail){throw new Error("email nao encontrado")}


      const resultSenha = await validarSenha(senha, resultEmail.senha)
      if(!resultSenha){throw new Error("senha invalida")}

      //remover senha do objeto antes de enviar a resposta
      const {senha:_senha, ...usuario} = resultEmail;

      //crirar o token do usuario
      const token = createJWT({usuario})

      return res.status(200).json(token);

    }catch(error){
      console.log(error)
      return res.status(404).json({erro: "credenciais invalidas"})
    }
  
  
  
  }
  
  export default {
    criarLogin
  }
  