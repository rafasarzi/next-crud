import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){

  const {exibirForm, exibirTabela, formVisivel, tebelaVisivel } = useTabelaOuForm()

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setClinte] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  

  useEffect (obterTodos,[])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })

  }
  function selecionarCliente(cliente: Cliente){
    setClinte(cliente)
    exibirForm()
  }
  async function excluirCliente(cliente: Cliente){
    console.log(cliente);
    await repo.excluir(cliente)
    obterTodos()

  }
  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }
  function novoCliente(){
    setClinte(Cliente.vazio())
    exibirForm()
  }

  return {
    cliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    novoCliente,
    obterTodos,
    tebelaVisivel,
    exibirTabela
  }
}