import { useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import { lang, handleLang } from '@stores/lang'
import {Autoplay, Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import GalleryTab from './GalleryTab'
import GallerySlider from './GallerySlider'
import { fetchServices } from 'src/api/api'

const services = await fetchServices()

const Gallery = () => {
  const currentLang = useStore(lang)
  const [currentTab, setCurrentTab] = useState(1)
  const [currentService, setCurrentService]= useState(null)
  useEffect(() => {
    setCurrentService(services.find(service => service.id === currentTab)) 
  }, [currentTab])

  return(
    <section id='services'>
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-center md:items-end">
        <h2 className="text-subtitle max-w-[20ch]">{currentLang.locale.gallery.title} <br /> <span className="text-secondary uppercase text-custom ">{currentLang.locale.gallery.subtitle1} <br />{currentLang.locale.gallery.subtitle2}</span></h2>
        <ul className="flex flex-col md:flex-row w-full md:w-auto justify-between gap-[1px] text-center">
          {services && services.map(service => {
            const { id, name} = service
            return (
              <GalleryTab key={`service-${id}`} text={name} id={id} active={currentTab} setCurrentTab={setCurrentTab} />
            )
          }
          )}
        </ul>
      </header>
      <div className="bg-black text-white p-12">
        {
          currentService && <GallerySlider slides={currentService.gallery.data} />
        }
         <a className="grid max-w-[250px] mx-auto text-center -mb-20 p-6 bg-secondary rounded-lg">{currentLang.locale.gallery.button}</a>
      </div>
     
    </section>)
}

export default Gallery
