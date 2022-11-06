import { useLoaderData } from 'react-router-dom'
import TableClients from '../components/table/TableClients'
import TitlePage from '../components/TitlePage'
import { getClients } from '../data/clients'

export const loader = () => {
  return getClients()
}

const Index = () => {
  const clients = useLoaderData()

  return (
    <>
      <TitlePage title={'Clientes'} subtitle={'Administra tus clientes'} />
      {clients.length ? (
        <TableClients clients={clients} />
      ) : (
        <div className="bg-gray-200 mt-10 rounded-md flex flex-row justify-center items-center h-56">
          <h2 className="text-center font-bold text-2xl">
            No hay clientes aún
          </h2>
        </div>
      )}
    </>
  )
}

export default Index
