import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import './App.css'
import Intro from './intro/Intro'
import Services from './components/Services/Services'
import Experiences from './components/Experiences/Experiences'
import Work from './components/works/Work'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
  <div className="App">
    <Navbar/>
    <Intro/>
    <Services/>
    <Experiences/>
    <Work/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
  </div>
  )
}

export default App