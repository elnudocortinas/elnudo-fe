import { useStore } from '@nanostores/react'
import { lang, handleLang } from '@stores/lang'
import { useState } from 'react'

const Navigation = () => {
  const currentLang = useStore(lang)
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <nav className="bg-light p-4">
      <div className="flex flex-col items-start md:flex-row md:items-center md:justify-around max-w-7xl mx-auto">
        <section className='flex items-center justify-start gap-28'>
          <img onClick={handleMenu} className='cursor-pointer block md:hidden' src="/images/menu.svg" alt="" width={24}/>
          <img src="/images/logo.png" className="max-w-[120px] justify-self-center" alt=""/>
        </section>
        <ul className={`gap-10 items-center justify-center w-full  md:justify-end  ${isOpen ? 'flex flex-col md:flex-row' : 'hidden md:flex'} `}>
          <li>{currentLang.locale.menu.index}</li>
          <li>{currentLang.locale.menu.about}</li>
          <li>{currentLang.locale.menu.services}</li>
          <li>{currentLang.locale.menu.clients}</li>
          <li>{currentLang.locale.menu.contact}</li>
          <li><a href="" target='_blank'><img src="/images/insta.svg" alt="" width={24} /></a></li>
          <li><a href="" target='_blank'><img src="/images/face.svg" alt="" width={12} /></a></li>
          <li className="font-light cursor-pointer" onClick={handleLang}>{currentLang.flag}</li> 
        </ul>
      </div>
    </nav>
  )
}

export default Navigation