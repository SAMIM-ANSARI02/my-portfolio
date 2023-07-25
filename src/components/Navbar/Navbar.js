import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle.js'
import { Link } from 'react-scroll'

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
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                         <li>Home</li>
                     </Link>
                     <Link spy={true} to='services' smooth={true} activeClass='activeClass'>
                     <li>services</li>
                     </Link>
                     <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                     <li>Experience</li>
                     </Link>
                     <Link spy={true} to='Protfolio' smooth={true} activeClass='activeClass'>
                     <li>Protfolio</li>
                     </Link>
                     <Link spy={true} to='Testimonial' smooth={true} activeClass='activeClass'>
                     <li>Testimonial</li>
                     </Link>
                </ul>
            </div>
            <Link spy={true} to='Testimonial' smooth={true} activeClass='activeClass'>
            <button className="button n-button" >contact us</button>
                     </Link>
            
        </div>
    </div>
  )
}
