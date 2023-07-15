import React from 'react'
import './Intro.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import myphoto from '../images/myphoto.jpeg'
import color3 from '../images/color3.png'
import color4 from '../images/color4.jpg'
import js from '../images/js.webp'
import functionup from '../images/functionup.jpg'
import emoji1 from '../images/emoji1.jpg'



import Floating from '../components/Floatingdiv/Floating';
import { border } from '@mui/system';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I am </span>
                <span>Samim Ansari</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi animi ullam nam deserunt? Vel rem saepe at soluta earum ullam est eaque dicta totam fugit iste a numquam ad ex laborum, assumenda deleniti consectetur incidunt quibusdam, perferendis reiciendis quos aspernatur vitae. Reprehenderit nemo sed fugit quos dolore nobis ratione tempora.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <din className="i-icon">
                 <GitHubIcon style={{fontSize:'4rem'}}/>
                 <LinkedInIcon style={{fontSize:'3rem'}}/>
                 <InstagramIcon style={{fontSize:'4rem'}}/>
            </din>
            
           
        </div>
        <div className="i-right">
             <img src={color4} style={{borderRadius:'50%'}} alt="" />
            <img src={color3} alt="color=photo" style={{borderRadius:'10rem'}} />
            <img src={myphoto}  style={{width:'15rem',height:'15rem',borderRadius:'50%',marginLeft:'6%',
             }} alt="my photo" />
             <img src={emoji1} alt="" />
             <div  style={{top:'-4%', left:'65%'}}>
             <Floating  image={js} tex1='Frontend' tex2='Developer'/>
             </div>
             <div style={{top:'18rem', left:'0rem' }}>
               <Floating image={functionup} tex1='trainee' tex2='Function up'/>
             </div>
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