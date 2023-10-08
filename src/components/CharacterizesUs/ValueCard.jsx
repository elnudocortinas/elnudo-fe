const ValueCard = ({title, children}) => {
  return(
    <article className="p-5 bg-white shadow-xl md:hover:shadow-2xl transition duration-300 rounded-3xl md:hover:scale-105 shadow-light">
      <h3 className="uppercase text-secondary text-center">{title}</h3>
      <div className="grid place-content-center py-10 min-h-full">
        {children}
      </div>
    </article>
  )
}

export default ValueCard