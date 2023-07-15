import React from 'react'
import './Card.css'

const Card = ({emoji,heading,detail}) => {
  return (
  <div className="cards">
    <img style={{width:'3rem',borderRadius:'50%',marginTop:'2rem'}} src={emoji} alt="" />
    <span>{heading}</span>
    <span>{detail}</span>
    <button className="c-button">Learn more</button>

  </div>
  )
}

export default Card