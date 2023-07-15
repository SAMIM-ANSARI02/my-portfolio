import React from 'react'
import '../Services/services.css'
import Card from '../Cards/Card'
import heartemoji from '../image/heartemoji.jpg'
import glassemoji from '../image/glassemoji.jpg'
import smartemoji from '../image/smartemoji.jpg'
import resume from './resume.pdf'

const Services = () => {
    return (
      <div className="services">
          {/* left side  */}
          <div className="awesome">
              <span>My Services</span>
              <span>services</span>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa dolores nobis.
                <br/> Harum recusandae aut ducimus sint qui animi nobis molestias hic inventore accusantium. Molestiae.</span>
                <a href={resume} download><button  className="button s-button">download resume</button></a>
              <div style={{background:'#ABF1FF94'}} className="blur s-blurl"></div>
  
          </div>
          {/* right side */}
          <div className="card">
            
            <div style={{left:'14rem'}}>
                <Card
                emoji={heartemoji}
                heading={'Design'}
                detail={'Figma,sketch,photoshop,adobe,'}

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
                detail={'github,MUI,Boostrap'}

                />
            </div>
            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
          </div>
      </div>
    )
  }
  
  export default Services