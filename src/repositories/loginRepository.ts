import { resolve } from "path";
import { rejects } from "assert";
import { table } from "console";;
import { resourceLimits } from "worker_threads";
import loginController from "../controllers/loginController";
import Login from "../models/login";

const listaLogin: Login[] = [];

async function getLogins(): Promise<Login[] | any> {
  return new Promise((resolve, reject) => {
    return resolve(listaLogin);
  });
}

async function getLogin(id: number): Promise<Login | any> {
  return new Promise((resolve, reject) => {
    const tarefa = listaLogin.find((t) => t.id === id);
    return resolve(tarefa);
  });
}

async function criarLogin(dados: Login): Promise<Login> {
  return new Promise((resolve, reject) => {
    if (!dados.email || !dados.password) {
      return reject(new Error("Dados inválidos, tente novamente"));
    }
    const novaTarefa = new Login(dados.email, dados.password);
    listaLogin.push(novaTarefa);
    return resolve(novaTarefa);
  });
}

async function atualizarLogin(id: number, dados: Login): Promise<Login> {
  return new Promise((resolve, reject) => {
    const indice = listaLogin.findIndex((t) => t.id === id);
    if (indice === -1) {
      return reject(new Error("Tarefa não encontrada"));
    }
    listaLogin[indice].email = dados.email;
    listaLogin[indice].password = dados.password;
    return resolve(listaLogin[indice]);
  });
}

async function deletarlogin(id:number): Promise<Login> {
  return new Promise((resolve, reject)=>{
    const indice = listaLogin.findIndex(t => t.id === id)
    if(indice === -1){
      return reject(new Error("Tarefa não existe"))
    } 
    const [tarefa] = listaLogin.splice(indice, 1)
    return resolve(tarefa)

  })

}


export default {
  getLogins,
  getLogin,
  criarLogin,
  atualizarLogin,
  deletarlogin
};
