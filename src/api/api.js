const API = 'https://elnudo-api2.up.railway.app/api/'

export const fetchServices = async () => {
  try{
    const results = await fetch(`${API}services?populate=*&sort[0]=order:asc`)
    const { data } = await results.json()    
    const services = data.map(item => {
      const { id, attributes} = item
      const { name, gallery } = attributes
      return {
        id, name, gallery
      }
    })
    return services
  } catch {
  }
}

export const fetchTestimonials = async () => {
  try{
    const results = await fetch(`${API}testimonials?sort[0]=createdAt:desc`)
    const { data } = await results.json()
    const testimonials = data.map(item => {
      const {id, attributes} = item 
      const {name, body} = attributes
      return { id, name, body}
    })
    return testimonials
  }catch {
  }
}

export const sendMessage = async (message) => {
  try{
    const result = await fetch(`${API}messages`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(message, null, 2)
    })
    return result
  } catch{} 
}