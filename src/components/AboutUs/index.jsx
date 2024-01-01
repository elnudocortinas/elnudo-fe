import { useStore } from '@nanostores/react'
import { lang } from '@stores/lang'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  const currentLang = useStore(lang)
  return(
    <div className={`${styles.about} md:my-5`} id='about-us'>
      <div className={`${styles.back} bg-black`}></div>
      <div className={styles.image}>
        <img src="/images/about.png" alt="" />
      </div>
      <div className={`${styles.text} bg-light p-8 text-center grid place-content-center`}>
        <h2 className='text-large'>{currentLang.locale.about.title}<br /><span className='text-custom uppercase text-secondary'>{currentLang.locale.about.sub}</span></h2>
        <p className='max-w-xs'>
          {currentLang.locale.about.text1} <span className='text-secondary text-bold'>{currentLang.locale.about.text2} </span>
          {currentLang.locale.about.text3} <span className='text-secondary text-bold'>{currentLang.locale.about.text4} </span><br /> 
          {currentLang.locale.about.text5} <span className='text-secondary text-bold'> {currentLang.locale.about.text6} </span>
          {currentLang.locale.about.text7} <span className='text-secondary text-bold'>{currentLang.locale.about.text8} </span>
        </p>
      </div>
    </div>
  )
}

export default AboutUs
