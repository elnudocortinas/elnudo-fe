export const fetchServices = () => {
  return fetch('https://elnudo-api.up.railway.app/api/services')
  .then(res => res.json())
  .then(data => {
    const {} = data
  })
}