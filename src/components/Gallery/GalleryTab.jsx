const GalleryTab = ({ text, setCurrentTab, active, id }) => {
  const handleActive = () => {
    setCurrentTab(id)
  }
  return (
    <li
      onClick={handleActive}
      className={`p-10 uppercase rounded-tr-lg rounded-tl-lg ${active === id ? 'bg-secondary text-white text-bold' :'bg-black text-secondary'} cursor-pointer`}
    >
      {text}
    </li>
  )
}

export default GalleryTab