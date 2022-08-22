import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";


export default function Home() {

  const { 
    cliente,
    clientes, 
    selecionarCliente, 
    novoCliente, 
    salvarCliente, 
    excluirCliente, 
    tebelaVisivel, 
    exibirTabela 
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}>
      <Layout titulo="Componente simples">
        {tebelaVisivel ? (
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
            clienteSelecionado={selecionarCliente} 
            clienteExcluido={excluirCliente}
          />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
       
      </Layout>
    </div>
  )
}
