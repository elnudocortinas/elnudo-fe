import { useEffect, useState } from "react"
import GalleryTab from "./GalleryTab"
import { fetchServices } from "./services"

const Gallery = () => {
  const [currentTab, setCurrentTab] = useState(1)
  const [services, setServices]= useState(null)
  useEffect(() => {
    fetch('https://elnudo-api.up.railway.app/api/services')
    .then(res => res.json())
    .then(res => {
      const { data } = res 
      setServices(Object.entries(data))
    })
    
  }, [])

  return (
    <section>
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-center md:items-end">
        <h2 className="text-subtitle max-w-[20ch]">Nuestros <br /> <span className="text-secondary uppercase text-custom ">Servicios <br />y Productos</span></h2>
        <ul className="flex flex-col md:flex-row w-full md:w-auto justify-between gap-[1px] text-center">
          {services && services.map(service => {
            const { id, attributes } = service[1]
            const { name } = attributes
            return (
              <GalleryTab key={`service-${id}`} text={name} id={id} active={currentTab} setCurrentTab={setCurrentTab} />
            )}
          )}
        </ul>
      </header>
      <div className="bg-black text-white p-10">
        {currentTab}
      </div>
    </section>
  )
}

export default Gallery