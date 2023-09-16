import React, { useRef } from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import emailjs from 'emailjs-com'




const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('syscily.brown__email-id', 'template_3y91apu', form.current, 'bMSBVJbtm0OCMHssm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);

        
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
    <h5> Get in Touch </h5>
    <h2> Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
         
          <h4><a href='mailto:sbrown@syscilythedeveloper.com' target='_blank' rel="noreferrer" id='send__email'> <TfiEmail className="contact__option-icon" /></a></h4>
          <h5> <a href='mailto:sbrown@syscilythedeveloper.com' target='_blank' rel="noreferrer" id='send__email'>sbrown@syscilythedeveloper.com</a></h5>
          
        </article>


  
      </div>
      {/*End of Contact Options */}
      <form ref={form} onSubmit={sendEmail}> 
        <input type="text" name="name" className='placeholders' placeholder="Your Full Name" required/>
        <input type ="email" name="email" className='placeholders' placeholder= "Your Email"/>
        <textarea name="message" rows="7" className='placeholders' placeholder="Your Message" required />
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    
    </section>
  )
}

export default Contact



