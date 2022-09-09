import React from 'react'
import { Pagination ,Autoplay , Mousewheel} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imageSlider01, imageSlider02, imageSlider03 } from '../assets/images';


const Slider = () => {

  return (
    <section className="relative">
        <div className="absolute top-0 left-0 right-0 bg-white h-2/4"></div>
        <div className="absolute bottom-0 left-0 right-0 bg-gray-100 h-2/4"></div>
        <Swiper
            cssMode={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{delay:10000,disableOnInteraction: false}}
            mousewheel={true}
            modules={[Pagination,Autoplay, Mousewheel]}
        >
            <SwiperSlide className="px-6"><img src={imageSlider01} className="w-full" alt="" /></SwiperSlide>
            <SwiperSlide className="px-6"><img src={imageSlider02} className="w-full" alt="" /></SwiperSlide>
            <SwiperSlide className="px-6"><img src={imageSlider03} className="w-full" alt="" /></SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Slider