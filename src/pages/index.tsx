import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";

export default function Home() {


  const clientes = [
    new Cliente('Ana', 34, '1' ),
    new Cliente('Maria', 30, '2' ),
    new Cliente('José', 35, '3' ),
    new Cliente('João', 32, '4' ),
    new Cliente('Carlos', 31, '5' )
  ]
  const [cliente, setClinte] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela'|'form'>('tabela')

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome);
    setClinte(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.idade);
  }
  function salvarCliente(cliente: Cliente){
    console.log(cliente);
    alert('alterado')
    setVisivel('tabela')
  }
  function novoCliente(cliente: Cliente){
    console.log(cliente);
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
