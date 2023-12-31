import { useEffect, useState } from "react"
import {Autoplay, Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import GalleryTab from './GalleryTab'
import GallerySlider from './GallerySlider'

const Gallery = () => {
  const [currentTab, setCurrentTab] = useState(1)
  const [services, setServices]= useState(null)
  const [currentService, setCurrentService]= useState(null)
  useEffect(() => {
    fetch('https://elnudo-api.up.railway.app/api/services?populate=*&sort[0]=order:asc')
    .then(res => res.json())
    .then(res => {
      const { data } = res 
      setServices(Object.entries(data))
      setCurrentService(data.find(service => service.id === currentTab))
    }) 
  }, [currentTab])

  return(
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
      <div className="bg-black text-white p-12">
        {
          currentService && <GallerySlider slides={currentService?.attributes?.gallery.data} />
        }
      </div>
    </section>)
}

export default Gallery
