import React from 'react'
import './Footer.css'
import wave from '../image/footer1.jpg'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div  className="footer">
        <img style={{width:'100%',height:'15rem'}} src={wave} alt="" />
        <div className="f-content">
            <div style={{color:'var(--orange)',
            fontWeight:'bolder',
            fontSize:'2rem',
            backgroundColor:'white',
            marginLeft:'19rem',
            marginBottom:'2rem',
            height:'3rem',
            width:'25rem',
            display:'flex',
            justifyContent:'center'


        }}>welcome to IT World</div>
            <div className='f-icon'>
                <Insta size='2rem' />
                <Twitter size='2rem'/>
                <Linkedin size='2rem'/>
            </div>

        </div>
    </div>
  )
}

export default Footer