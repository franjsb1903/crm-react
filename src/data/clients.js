import { API_URL } from '../config/constants'

export const getClients = async () => {
  const url = API_URL

  const response = await fetch(url)
  const json = await response.json()

  return json
}

export const getClient = async id => {
  const url = `${API_URL}/${id}`

  const response = await fetch(url)
  const json = await response.json()

  return json
}

export const newClient = async data => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const editClient = async (id, data) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    await response.json()
  } catch (error) {
    console.error(error)
  }
}

export const deleteClient = async id => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })

    await response.json()
  } catch (error) {
    console.error(error)
  }
}
