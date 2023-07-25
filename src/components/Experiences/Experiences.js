import React from 'react'
import './Experiences.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Experiences = () => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
    <div className="experience" id='Experience' style={{color: darkMode?'black':''}}>
        <div className="achievement">
            <div className="circle" style={{fontSize:'1rem'}}>fresher</div>
            <span>Year</span>
            <span>experience</span>
        </div>
        <div className="achievement">
            <div className="circle">4+</div>
            <span>completed</span>
            <span>project</span>
        </div>
        <div className="achievement">
            <div className="circle">nil</div>
            <span>compaines</span>
            <span>project</span>
        </div>
    </div>
  )
}

export default Experiences