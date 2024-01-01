import {Autoplay, Navigation} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';

const GallerySlider = ({slides}) => {
  return(
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={50}
      slidesPerView={2}
      heigth={100}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 20
        },
        640:{
          slidesPerView: 2,
          spaceBetween: 20
        },
        960: {
          slidesPerView: 4
        }
      }}
      navigation={{enabled: true}}
      loop
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map(item => (
        <SwiperSlide key={item.attributes.name}>
          <img src={item?.attributes.url} alt="" />
        </SwiperSlide>
        )
      )}
    </Swiper>
  )
}

export default GallerySlider