import React from 'react'
import '../Floatingdiv/Floating.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Floating = ({image,tex1,tex2}) => {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode; 
  return (
   <div className="floatingdiv">
     <img src={image} alt="" />
     <span style={{color: darkMode?'black':''}}>{tex1 }
        <br />
        {tex2}
     </span>
   </div>
  )
}

export default Floating