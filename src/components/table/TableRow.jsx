import { Form, redirect, useNavigate } from 'react-router-dom'
import { deleteClient } from '../../data/clients'

export const action = async ({ params }) => {
  await deleteClient(params.id)
  return redirect('/')
}

const TextContact = ({ children }) => (
  <p className="text-gray-600">{children}</p>
)

const Span = ({ children }) => (
  <span className="text-gray-800 uppercase font-bold">{children}</span>
)

const TableRow = ({ client }) => {
  const navigate = useNavigate()
  const { name, company, email, phone, notes, id } = client
  return (
    <>
      <tr className="border-b">
        <td className="p-6 space-y-2" align="center">
          <p className="text-2xl text-gray-800">{name}</p>
          <p>{company}</p>
        </td>
        <td className="p-6" align="center">
          <TextContact>
            <Span>Email: </Span>
            {email}
          </TextContact>
          <TextContact>
            <Span>TEL: </Span>
            {phone}
          </TextContact>
        </td>
        <td className="p-6 flex gap-3 justify-center items-center flex-col">
          <div>
            <button
              type="button"
              className="text-white p-2 w-20 hover:bg-blue-700 uppercase font-bold text-xs bg-blue-600 rounded-md"
              onClick={() => navigate(`/clients/edit/${id}`)}
            >
              Editar
            </button>
          </div>
          <Form
            method="post"
            action={`/clients/delete/${id}`}
            onSubmit={e => {
              if (!confirm('¿Deseas eliminar este registro?')) {
                e.preventDefault()
              }
            }}
          >
            <button
              type="submit"
              className="text-white p-2 rounded-md w-20 bg-red-600 hover:bg-red-700 uppercase font-bold text-xs"
            >
              Eliminar
            </button>
          </Form>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className="p-4 bg-gray-200">
          <span className="font-bold">Notas: </span>
          {notes}
        </td>
      </tr>
    </>
  )
}

export default TableRow
