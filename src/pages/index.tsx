import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {


  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setClinte] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela'|'form'>('tabela')

  useEffect (obterTodos,[])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })

  }
  function clienteSelecionado(cliente: Cliente){
    setClinte(cliente)
    setVisivel('form')
  }
  async function clienteExcluido(cliente: Cliente){
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
    setVisivel('form')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}>
      <Layout titulo="Componente simples">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
            <Botao 
              cor=""
              className="mb-5"
              onClick={novoCliente}
              >
                Novo Cliente
            </Botao>
          </div>
          
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado} 
            clienteExcluido={clienteExcluido}
          />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
       
      </Layout>
    </div>
  )
}
