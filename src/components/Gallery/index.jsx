import { useState } from "react"
import GalleryTab from "./GalleryTab"

const Gallery = () => {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <section>
      <header className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-center md:items-end">
        <h2 className="text-subtitle max-w-[20ch]">Nuestros <br /> <span className="text-secondary uppercase text-custom ">Servicios <br />y Productos</span></h2>
        <ul className="flex flex-col md:flex-row w-full md:w-auto justify-between gap-[1px] text-center">
          <GalleryTab text="Cortinas" id={1} active={currentTab} setCurrentTab={setCurrentTab} />
          <GalleryTab text="Persianas" id={2} active={currentTab} setCurrentTab={setCurrentTab} />
          <GalleryTab text="Galeras" id={3} active={currentTab} setCurrentTab={setCurrentTab} />
          <GalleryTab text="Otros" id={4} active={currentTab} setCurrentTab={setCurrentTab} />
        </ul>
      </header>
      <div className="bg-black text-white p-10">
        {currentTab}
      </div>
    </section>
  )
}

export default Gallery