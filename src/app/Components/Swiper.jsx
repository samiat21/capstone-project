import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';;
import Image from 'next/image';


export default function SwiperComponent() {
  return (
    <div>
        <Swiper
      navigation={true} modules={[Navigation]} className="mySwiper"
      spaceBetween={5}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      
      <SwiperSlide><Image className='md:ml-[300px] ml-[50px]' src='https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg'height={500} width={500} /></SwiperSlide>
      <SwiperSlide><Image className='md:ml-[300px] ml-[50px]' src='https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' height={500} width={500} /></SwiperSlide>
      <SwiperSlide><Image className='md:ml-[300px] ml-[50px]' src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'height={500} width={500} /></SwiperSlide>
      <SwiperSlide><Image className='md:ml-[300px] ml-[50px]' src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80'height={500} width={500} /></SwiperSlide>
    
    </Swiper>

    </div>
  )
}
