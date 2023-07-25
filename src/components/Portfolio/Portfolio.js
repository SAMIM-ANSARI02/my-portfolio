import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import gym from '../image/gym.avif'
import twitter from '../image/twitter.avif'
import vegetable from '../image/vegetable.avif'
import Ecomerce from '../image/Ecomerce.avif'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Portfolio = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className="Portfolio" id='Protfolio'>
         {/* heading  */}
         <span style={{color: darkMode?'white':''}}>Recent Projects</span>
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
              <a href="https://prismatic-donut-a4fe53.netlify.app/"><button className='live'>Live</button></a>
             </SwiperSlide>
             <SwiperSlide>
              <img src={twitter} alt="" />
              <a href="https://lustrous-horse-2e4aaa.netlify.app/"><button className='live'>Live</button></a>
             </SwiperSlide>
             <SwiperSlide>
              <img src={vegetable} alt="" />
              <a href="https://amazing-griffin-b0a511.netlify.app/"><button className='live'>Live</button></a>
             </SwiperSlide>
             <SwiperSlide>
              <img src={Ecomerce} alt="" />
              <button className='live'>Live</button>
             </SwiperSlide>
         </Swiper>
         
    </div>
  )
}

export default Portfolio