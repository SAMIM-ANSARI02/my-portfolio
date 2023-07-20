import React from 'react'
import './work.css'
import amazon from '../image/amazon.png'
import flipkart from '../image/flipkart.png'
import microsoft from'../image/microsoft-logo.png'
import oracle from '../image/oracle.png'
import dell from '../image/dell.png'






const Work = () => {
  return (
  
    <div className="work">
        {/* left side */}
          <div className="awesome">
              <span>Work for all these</span>
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
          <div className="w-right">
             <div className="w-mainCircle">
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
             </div>
             <div className="w-backcircle blue" ></div>
             <div className="w-backcircle yellow"></div>

          </div>
    </div>
  )
}

export default Work