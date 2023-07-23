import React,{useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const[done,setdone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qbvvpkp', 'template_yrerird', form.current, '2y6UVNcTTiEB5a3Fo')
        .then((result) => {
            console.log(result.text);
            setdone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form">
        {/* left work  */}
        <div className="w-left">
           <div className="awesome">
              <span>Get in Touch</span>
              <span>contact me</span>
              <div className="blur s-blur1"
            style={{background:'#ABF1FF94'}}></div>
           </div>
        </div>

        {/* right work */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                 <textarea name="message" className='user' placeholder='Message'></textarea>
                 <input type="submit" value='send' className='button' />
                 <span>{done && 'Thank you for your message'}</span>
                 <div className='blur c-blur1' style={{background:'var(--purple)'}}></div>
                
            </form>
        </div>

    </div>
    
    
  )
}

export default Contact