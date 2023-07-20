import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import gym from '../image/gym.avif'
import twitter from '../image/twitter.avif'
import vegetable from '../image/vegetable.avif'
import Ecomerce from '../image/Ecomerce.avif'
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="Portfolio">
         {/* heading  */}
         <span>Recent Projects</span>
         <span>Portfolio</span>

         {/* swiper slide */}
         <Swiper
         spaceBetween={3}
         slidesPerView={3}
         grabCursor={true}
         className='portfolio-slider'
          
         >
             <SwiperSlide>
              <img src={gym} alt="" />
             </SwiperSlide>
             <SwiperSlide>
              <img src={twitter} alt="" />
             </SwiperSlide>
             <SwiperSlide>
              <img src={vegetable} alt="" />
             </SwiperSlide>
             <SwiperSlide>
              <img src={Ecomerce} alt="" />
             </SwiperSlide>
         </Swiper>
         
    </div>
  )
}

export default Portfolio