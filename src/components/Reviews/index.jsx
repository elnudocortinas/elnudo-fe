import { useStore } from '@nanostores/react'
import { lang } from '@stores/lang'
import ReviewCard from './RevieCard'
import { fetchTestimonials } from 'src/api/api'

const reviews = await fetchTestimonials()

const Reviews = () => {
  const currentLang = useStore(lang)
  return (
    <div className="grid place-content-center py-12 max-w-7xl mx-auto mt-20">
      <h2 className='uppercase text-center text-secondary text-title'>
        {currentLang.locale.reviews.sub1}<br /><span className="text-black text-subtitle">{currentLang.locale.reviews.sub2}</span><br />{currentLang.locale.reviews.sub3}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20 p-8">
        {
          reviews && reviews.map(item => {
            const {id, name, body} = item
            return(
              <ReviewCard name={name} body={body} key={id}/>
            )
          })
        }
      </div>
    </div>
    
  )
}

export default Reviews