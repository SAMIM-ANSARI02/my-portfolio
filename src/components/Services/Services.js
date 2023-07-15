import React from 'react'
import '../Services/services.css'
import Card from '../Cards/Card'
import heartemoji from '../image/heartemoji.jpg'

const Services = () => {
    return (
      <div className="services">
          {/* left side  */}
          <div className="awesome">
              <span>My Services</span>
              <span>services</span>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ipsa dolores nobis.
                <br/> Harum recusandae aut ducimus sint qui animi nobis molestias hic inventore accusantium. Molestiae.</span>
              <button  className="button s-button">download resume</button>
              <div style={{background:'#ABF1FF94'}} className="blur s-blurl"></div>
  
          </div>
          {/* right side */}
          <div className="card">
            
            <div>
                <Card
                emoji={heartemoji}
                heading={'Design'}
                detail={'Figma,sketch,photoshop,adobe,'}

                />
            </div>
          </div>
      </div>
    )
  }
  
  export default Services