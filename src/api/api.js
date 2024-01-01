export const fetchServices = async () => {
  try{
    const results = await fetch('https://elnudo-api.up.railway.app/api/services?populate=*&sort[0]=order:asc')
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
    const results = await fetch('https://elnudo-api.up.railway.app/api/testimonials?sort[0]=createdAt:desc')
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
  
  