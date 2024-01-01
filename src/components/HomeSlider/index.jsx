import { useStore } from '@nanostores/react'
import { lang } from '@stores/lang'
import styles from './HomeSlider.module.css'

const HomeSlider = () => {
  const currentLang = useStore(lang)
  return(
    <header className={`${styles.homeslider} max-w-7xl mx-auto md:mt-12 md:mb-32`}>
      <p className={`${styles.previous} grid place-content-center`}></p>
      <div className={`${styles.back} bg-black text-white`}>
        <section className="grid place-content-center p-8"> 
          <h1 className="text-center text-default md:text-large max-w-[20ch]">{currentLang.locale.slider.sub} <br /><span className="text-subtitle md:text-title uppercase">{currentLang.locale.slider.title}</span></h1>
          <button className="bg-secondary px-4 py-2 rounded-full text-bold">{currentLang.locale.slider.button}</button>
        </section>
      </div>
      <img className={`${styles.image}`}  src="/images/slider1.png" alt="" />
      <p className={`${styles.next} grid place-content-center`}></p>
    </header>
  )
}

export default HomeSlider