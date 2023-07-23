import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle.js'

export const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">samim</div>
             <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>services</li>
                    <li>Experience</li>
                    <li>Protfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className="button n-button" >contact us</button>
        </div>
    </div>
  )
}
