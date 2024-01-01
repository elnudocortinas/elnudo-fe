import { useStore } from '@nanostores/react'
import { lang } from '@stores/lang'

const ReviewCard = ({name, body}) => {
  const currentLang = useStore(lang)
  return (
    <div className='min-w-fit hover:scale-110 transition duration-500'>
      <header className='bg-primary w-full h-16 rounded-t-lg'/>
      <main className='p-12 rounded-b-lg border-b border-l border-r border-black/[.2]'>
        <h3 className='text-subtitle text-secondary text-center'>{currentLang.locale.reviews.testimony} </h3>
        <p className='mt-10 text-center'>{body}</p>
        <h3 className="text-secondary text-center mt-6">{name}</h3>
      </main>
    </div>
  )
}

export default ReviewCard