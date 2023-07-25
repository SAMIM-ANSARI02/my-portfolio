import React from 'react'
import '../Services/services.css'
import Card from '../Cards/Card'
import heartemoji from '../image/heartemoji.jpg'
import glassemoji from '../image/glassemoji.jpg'
import smartemoji from '../image/smartemoji.jpg'
import resume from './resume.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'


const Services = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  const transition={duration:4,type:'spring'}
    return (
      <div className="services" id='services'>
          {/* left side  */}
          <div className="awesome" style={{width:'18rem'}}>
              <span style={{color: darkMode?'white':''}} >My Services</span>
              <span>services</span>
              <span>From the first pixel to the last line of code, I thrive on crafting responsive and dynamic websites that are as beautiful as they are functional.
                <br/>  Leveraging the power of HTML, CSS, and JavaScript, I transform ideas into interactive realities, making sure they adapt seamlessly to any device or screen size</span>
                <a href={resume} download><button  className="button s-button">download resume</button></a>
              <div style={{background:'#ABF1FF94'}} className="blur s-blurl"></div>
  
          </div>
          {/* right side */}
          <motion.div
          transition={transition}
          whileInView={{left:'7rem'}}
          initial={{left:'50%'}}
          className="card">
            
            <div style={{left:'14rem'}}>
                <Card
                emoji={heartemoji}
                heading={'Design'}
                detail={'Figma,sketch,photoshop,'}

                />
            </div>
            <div style={{top:'14rem',left:'-4rem'}}>
                <Card
                emoji={glassemoji}
                heading={'Developer'}
                detail={'html,css,javascript,rectjs'}

                />
            </div>
            <div style={{top:'19rem',left:'12rem'}}>
                <Card
                emoji={smartemoji}
                heading={'Other tool'}
                detail={'github,MUI,Boostrap,etc'}

                />
            </div>
            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
          </motion.div>
      </div>
    )
  }
  
  export default Services