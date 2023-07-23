import React, { useContext } from 'react'
import { Navbar } from './components/Navbar/Navbar'
import './App.css'
import Intro from './intro/Intro'
import Services from './components/Services/Services'
import Experiences from './components/Experiences/Experiences'
import Work from './components/works/Work'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { themeContext } from './Context'



const App = () => {

  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode;
  return (
  <div className="App"
  style={{
    background: darkMode? 'black':'',
    color: darkMode?'white':''
  }}>
    <Navbar/>
    <Intro/>
    <Services/>
    <Experiences/>
    <Work/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
  </div>
  )
}

export default App