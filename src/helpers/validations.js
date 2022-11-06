export const validateForm = data => {
  const { email } = data

  const errors = []
  if (Object.values(data).includes('')) {
    errors.push('Todos los campos son obligatorios')
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )
  if (!regex.test(email)) {
    errors.push('El email no es válido')
  }

  return errors
}
