import TableHeader from './TableHeader'
import TableRow from './TableRow'

const TableClients = ({ clients }) => {
  return (
    <table className="w-full bg-white shadow mt-5 table-auto">
      <thead className="bg-blue-800 text-white">
        <tr>
          <TableHeader>Cliente</TableHeader>
          <TableHeader>Contacto</TableHeader>
          <TableHeader>Acciones</TableHeader>
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <TableRow client={client} key={client.id} />
        ))}
      </tbody>
    </table>
  )
}

export default TableClients
