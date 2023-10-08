import { useStore } from '@nanostores/react'
import { lang } from '@stores/lang'
import ValueCard from './ValueCard.jsx' 
import { Profesionalism, Attention, Vanguard, Etic, Trust } from './Icons.jsx'

const CharacterizesUs = () => {
  const currentLang = useStore(lang)
  return (
    <section className="grid place-content-center py-12">
      <h2 className="text-secondary text-subtitle uppercase text-center">{currentLang.locale.characterizes.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <ValueCard title={currentLang.locale.characterizes.profesionalism}><Profesionalism/></ValueCard> 
        <ValueCard title={currentLang.locale.characterizes.attention}><Attention/></ValueCard> 
        <ValueCard title={currentLang.locale.characterizes.vanguard}><Vanguard/></ValueCard> 
        <ValueCard title={currentLang.locale.characterizes.etic}><Etic/></ValueCard> 
        <ValueCard title={currentLang.locale.characterizes.trust}><Trust/></ValueCard> 
      </div>
    </section>
  )
}

export default CharacterizesUs