import React from 'react'
import './Card.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Card = ({emoji,heading,detail}) => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
  <div className="cards" style={{background: darkMode?'green':''}}>
    <img style={{width:'3rem',borderRadius:'50%',marginTop:'2rem'}} src={emoji} alt="" />
    <span>{heading}</span>
    <span>{detail}</span>
    <a href="https://helpx.adobe.com/in/photoshop/using/create-documents.html"><button className="c-button">Learn more</button></a>

  </div>
  )
}

export default Card