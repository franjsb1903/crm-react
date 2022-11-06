import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">
        CRM - Clientes
      </h1>
      <p className="text-center font-bold text-2xl">Ha ocurrido un error</p>
      <p className="bg-gray-200 mt-10 rounded-md flex flex-row justify-center items-center h-56">
        {error.message || error.statusText}
      </p>
    </div>
  )
}

export default ErrorPage
