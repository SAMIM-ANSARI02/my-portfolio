import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profilepic1 from '../image/profilepic1.avif'
import profilepic2 from '../image/profilepic2.avif'
import profilepic3 from '../image/profilepic3.avif'
import profilepic4 from '../image/profilepic4.avif'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
    const Client=[
        {
            img:profilepic1,
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi voluptates alias delectus eaque voluptatum minima obcaecati nesciunt labore. Eum?'
        },
        {
            img:profilepic2,
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi voluptates alias delectus eaque voluptatum minima obcaecati nesciunt labore. Eum?'
        },
        {
            img:profilepic3,
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi voluptates alias delectus eaque voluptatum minima obcaecati nesciunt labore. Eum?'
        },
        {
            img:profilepic4,
            review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi voluptates alias delectus eaque voluptatum minima obcaecati nesciunt labore. Eum?'
        }
    ]
  return (
    
    <div className="t-wrapper" id='Testimonial'>
        <div className="t-heading">
            <span>Client always get</span>
            <span>Exceptional work</span>
            <span>from me ...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesperView={1}
        pagination={{clickable:true}}
        >
            {
                Client.map((value,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img   src={value.img} alt="" />
                            <span>{value.review}</span>
                            </div>
                           

                        </SwiperSlide>
                    )
                })
            }
            
        </Swiper>

    </div>
  )
}

export default Testimonial