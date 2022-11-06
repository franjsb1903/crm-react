import {
  useLoaderData,
  useActionData,
  redirect,
  Form as FormRouter,
} from 'react-router-dom'
import Form from '../components/form/Form'
import Error from '../components/Error'
import { editClient, getClient } from '../data/clients'
import FormHeader from '../components/form/FormHeader'
import { validateForm } from '../helpers/validations'

export const loader = async ({ params }) => {
  const { id } = params

  const client = await getClient(id)

  if (Object.values(client).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: `No hay resultados para el cliente con id ${id}`,
    })
  }

  return client
}

export const action = async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const errors = validateForm(data)
  if (errors.length > 0) {
    return errors
  }

  await editClient(params.id, data)

  return redirect('/')
}

const EditClient = () => {
  const client = useLoaderData()
  const errors = useActionData()

  return (
    <>
      <FormHeader
        title={'Editar Cliente'}
        subtitle={'A continuación podrás modificar los campos de un cliente'}
      />

      <div className="bg-white shadow rounded-md md:w-3/4 mt-10 mx-auto px-5 py-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <FormRouter method="post" noValidate>
          <Form client={client} />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer"
            value={'Editar cliente'}
          />
        </FormRouter>
      </div>
    </>
  )
}

export default EditClient
