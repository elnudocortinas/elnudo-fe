import { useStore } from '@nanostores/react'
import { lang, handleLang } from '@stores/lang'

const Footer = () => {
  const currentLang = useStore(lang)
  return (
    <footer className="bg-black ">
      <section className="py-8 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto ">
        <ul className="text-white gap-2 grid">
          <li><a href="/">{currentLang.locale.menu.index}</a></li>
          <li><a href="/#about-us">{currentLang.locale.menu.about}</a></li>
          <li><a href="/#services">{currentLang.locale.menu.services}</a></li>
          <li><a href="/#clients">{currentLang.locale.menu.clients}</a></li>
          <li><a href="/#contact">{currentLang.locale.menu.contact}</a></li>
        </ul>
        <div className='text-right text-white flex flex-col gap-5'>
          <a href="tel:+523781018714">Tel: 378-101-8714</a>
          <p>Mariano Jimenez #160 <br />Tepatitlán Jalisco</p>
          <a href="/privacy-policy">Aviso de Privacidad</a>
          <div className='flex gap-5 w-full justify-end items-end'>
          <a href="https://www.instagram.com/cortinaselnudo?igsh=MTVxbzZkb2gzNGljYg==" target='_blank'><img src="/images/insta.svg" alt="" width={24} /></a>
          <a href="https://www.facebook.com/CortinaselNudo?mibextid=LQQJ4d" target='_blank'><img src="/images/face.svg" alt="" width={12} /></a>
          </div>
        </div>
      </section>

        

    </footer>
  )
}

export default Footer