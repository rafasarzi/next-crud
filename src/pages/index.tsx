import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1' ),
    new Cliente('Maria', 30, '2' ),
    new Cliente('José', 35, '3' ),
    new Cliente('João', 32, '4' ),
    new Cliente('Carlos', 31, '5' )
  ]
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600 text-white
    `}>
      <Layout titulo="Componente simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
