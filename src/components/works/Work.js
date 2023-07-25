import React from 'react'
import './work.css'
import amazon from '../image/amazon.png'
import flipkart from '../image/flipkart.png'
import microsoft from'../image/microsoft-logo.png'
import oracle from '../image/oracle.png'
import dell from '../image/dell.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import { duration } from '@mui/material'
const Work = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
  
    <div className="work">
        {/* left side */}
          <div className="awesome">
              <span style={{color: darkMode?'white':''}}>Dream to Work for all these</span>
              <span>Brand companies</span>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   <br/>
                <span>Harum recusandae aut ducimus sint</span> 
                <br />
                <span>qui animi nobis molestias hic inventore accusantium.</span> </span>
              <button  className="button s-button">Hire me</button>
              <div style={{background:'#ABF1FF94'}} className="blur s-blurl"></div>
  
          </div>
          {/* right side */}
          <motion.div className="w-right">
             <motion.div 
               transition={{duration:3.5,type:'spring'}}
               initial={{rotate:45}}
               whileInView={{rotate:0}}
               viewport={{margin:'-40px'}}
             
             className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={flipkart} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={dell} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={oracle} alt="" />
                </div>
                <div className="w-secCircle">
                    <img style={{width:'3rem'}} src={microsoft} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={amazon} alt="" />
                </div>
             </motion.div>
             <div className="w-backcircle blue" ></div>
             <div className="w-backcircle yellow"></div>

          </motion.div>
    </div>
  )
}

export default Work