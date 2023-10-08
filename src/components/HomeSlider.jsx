import { useStore } from '@nanostores/react'
import { lang } from '../stores/lang'
import styles from './HomeSlider.module.css'

const HomeSlider = () => {
  const currentLang = useStore(lang)
  return(
    <header className={`${styles.homeslider} max-w-7xl mx-auto`}>
      <p className={`${styles.previous} grid place-content-center`}></p>
      <div className={`${styles.back} bg-black text-white`}>
        <section className="grid place-content-center p-8"> 
          <h1 className="text-center text-large">{currentLang.locale.slider.sub} <br /><span className="uppercase text-subtitle md:text-title">{currentLang.locale.slider.title}</span></h1>
          <button className="bg-secondary px-4 py-2 rounded-full text-default">{currentLang.locale.slider.button}</button>
        </section>
      </div>
      <img className={`hidden md:block ${styles.image}`}  src="/images/slider1.png" alt="" />
      <p className={`${styles.next} grid place-content-center`}></p>
    </header>
  )
}

export default HomeSlider