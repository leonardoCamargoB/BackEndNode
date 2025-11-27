import { resolve } from "path";
import Tarefa from "../models/tarefa";
import { rejects } from "assert";
import { table } from "console";
import tarefasControllers from "../controllers/tarefasControllers";
import { resourceLimits } from "worker_threads";

const listaTarefa: Tarefa[] = [];

async function getTarefas(): Promise<Tarefa[] | any> {
  return new Promise((resolve, reject) => {
    return resolve(listaTarefa);
  });
}

async function getTarefa(id: number): Promise<Tarefa | any> {
  return new Promise((resolve, reject) => {
    const tarefa = listaTarefa.find((t) => t.id === id);
    return resolve(tarefa);
  });
}

async function criarTarefa(dados: Tarefa): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    if (!dados.nome || !dados.descricao) {
      return reject(new Error("Dados inválidos, tente novamente"));
    }
    const novaTarefa = new Tarefa(dados.nome, dados.descricao);
    listaTarefa.push(novaTarefa);
    return resolve(novaTarefa);
  });
}

async function atualizarTarefa(id: number, dados: Tarefa): Promise<Tarefa> {
  return new Promise((resolve, reject) => {
    const indice = listaTarefa.findIndex((t) => t.id === id);
    if (indice === -1) {
      return reject(new Error("Tarefa não encontrada"));
    }
    listaTarefa[indice].nome = dados.nome;
    listaTarefa[indice].descricao = dados.descricao;
    return resolve(listaTarefa[indice]);
  });
}

async function deletarTarefa(id:number): Promise<Tarefa> {
  return new Promise((resolve, reject)=>{
    const indice = listaTarefa.findIndex(t => t.id === id)
    if(indice === -1){
      return reject(new Error("Tarefa não existe"))
    } 
    const [tarefa] = listaTarefa.splice(indice, 1)
    return resolve(tarefa)

  })

}


export default {
  getTarefas,
  getTarefa,
  criarTarefa,
  atualizarTarefa,
  deletarTarefa
};
