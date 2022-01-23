const baseUrl = process.env.REACT_APP_BACKEND_URL;
const headers = new Headers()

headers.append('Content-Type', 'application/json')

const ContactForm = values => {
  const reqBody = {
    name: values && values.name,
    email: values && values.email,
    message: values && values.message
  }

  const requestOptions = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(reqBody),
    redirect: 'follow'
  }
console.log('baseur', baseUrl)
  return fetch(`${baseUrl}/contact`, requestOptions).then(async r => {
    let result
    try {
      result = await r.json()
    } catch (e) {
      result = {}
    }
    return { ...result }
  })
}

export default ContactForm
