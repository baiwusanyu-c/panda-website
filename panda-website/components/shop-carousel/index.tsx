'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <div className="pr h-full w-[98vw]">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          bulletActiveClass: '!bg-cbd-brand-5',
          horizontalClass: 'swiper-pagination-horizontal',
          clickable: true
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        <SwiperSlide  className='w-[925px]'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg"  className='w-[925px] h-[618px]'/>
        </SwiperSlide>
        <SwiperSlide className='w-[925px]'>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg"  className='w-[925px] h-[618px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"   className='w-[925px] h-[618px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg"  className='w-[925px] h-[618px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg"  className='w-[925px] h-[618px]'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg"  className='w-[925px] h-[618px]'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
