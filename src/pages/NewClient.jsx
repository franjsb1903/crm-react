import { useActionData, redirect, Form as FormRouter } from 'react-router-dom'
import Error from '../components/Error'
import Form from '../components/form/Form'
import FormHeader from '../components/form/FormHeader'

import { newClient } from '../data/clients'
import { validateForm } from '../helpers/validations'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const errors = validateForm(data)
  if (errors.length > 0) {
    return errors
  }

  await newClient(data)

  return redirect('/')
}

const NewClient = () => {
  const errors = useActionData()

  return (
    <>
      <FormHeader
        title={'Nuevo Cliente'}
        subtitle={'Completa todos los campos para registrar un nuevo cliente'}
      />

      <div className="bg-white shadow rounded-md md:w-3/4 mt-10 mx-auto px-5 py-10">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <FormRouter method="post" noValidate>
          <Form />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer"
            value={'Registrar cliente'}
          />
        </FormRouter>
      </div>
    </>
  )
}

export default NewClient
