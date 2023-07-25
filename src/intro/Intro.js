import React from 'react'
import './Intro.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import myphoto from '../images/myphoto.jpeg'
import color3 from '../images/color3.png'
import color4 from '../images/color4.jpg'
import js from '../images/js.webp'
import functionup from '../images/functionup.jpg'
import emoji1 from '../images/emoji1.jpg'
import { themeContext } from '../Context';
import { useContext } from 'react'
import Floating from '../components/Floatingdiv/Floating';
import { border } from '@mui/system';
import {motion} from 'framer-motion'

const Intro = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  const transition={duration:2,type:'spring'}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode?'white':''}}>Hey! I am </span>
                <span>Samim Ansari</span>
                <span>I am a Frontend Developer, a master of web technologies and a passionate creator of immersive digital worlds. My mission is to bridge the gap between imagination and reality, breathing life into visionary designs through clean, efficient, and user-centric code. With a keen eye for aesthetics and an unwavering commitment to usability, I craft intuitive interfaces that captivate users, keeping them engaged and coming back for more</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icon" >
                 <a href="https://github.com/SAMIM-ANSARI02"><GitHubIcon style={{fontSize:'4rem',color:'var(--black)'}}/></a>
                 <a href="https://www.linkedin.com/in/samim-ansari-3729631ab/"><LinkedInIcon style={{fontSize:'3rem', color:'var(--black)'}}/></a>
                 <a href="https://twitter.com/ijsamimansari"><TwitterIcon style={{fontSize:'4rem',color:'var(--black)'}}/></a>
            </div>
            
           
        </div>
        <div className="i-right">
             <img src={color4} style={{borderRadius:'50%'}} alt="" />
            <img src={color3} alt="color=photo" style={{borderRadius:'10rem'}} />
            <img src={myphoto}  style={{width:'15rem',height:'15rem',borderRadius:'50%',marginLeft:'6%',
             }} alt="my photo" />
             <motion.img
             initial={{left:'-36%'}}
             whileInView={{left:'-24%'}}
             transition={transition}
              src={emoji1} alt="" />

             <motion.div
             transition={transition}
             initial={{top:'-4',left:'74%'}}
             whileInView={{left:'68%'}}

             style={{top:'-4%', left:'70%'}}
             className='Floating-div'
             >
             <Floating  image={js} tex1='Frontend' tex2='Developer'/>
             </motion.div>
             <motion.div
             transition={transition}
             initial={{left:'9%'}}
             whileInView={{left:'0rem'}}
             style={{top:'18rem', left:'0rem' }}
             className='Floating-div'
             >
               <Floating image={functionup} tex1='trainee' tex2='Function up'/>
             </motion.div>
             <div className="blur" style={{backgroundColor:'rgb(230 210 255)'}}></div>
             <div className="blur"style={{
              background:'#C1F5FF',
              top:'17rem',
              width:'21rem',
              height:'11rem',
              left:'-9rem'
              }}></div>
            
          
        </div>
        

    </div>
    
  )
}

export default Intro