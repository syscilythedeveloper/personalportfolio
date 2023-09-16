import React from 'react'
import './about.css'
import Giraffe from '../../assets/GiraffePic.png'
import {GiSkills} from 'react-icons/gi'
import {BsAward} from 'react-icons/bs'



const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>  
      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Giraffe} alt='Headshot' />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <div className='about__card__title'>
                <h3>Technical Competencies</h3>
              
              <GiSkills className='about_icon'/><br />
              </div>
              <ul>
                <li> <small> Object-Oriented Programming</small></li>
                <li> <small> Cloud Computing</small> </li>
                <li> <small> Frontend Developement</small></li>
                <li> <small> Backend Development </small></li>
                <li> <small> Algorithm </small></li>
                <li> <small> Data Structures </small></li>
                <li> <small> Web Development</small></li>
                <li> <small> Database Management</small></li>
                <li> <small> Version Control</small></li>
                <li> <small> Testing and Debugging</small></li>
                <li> <small> Restful APIs</small></li>
                <li> <small> Security</small></li>
                <li> <small> Containerization</small></li>
          
              </ul>
            
             
          
            </article>

           
      
            <article className='about__card'>
            
              <div className='about__card__title'>
              <h3>Soft <br/>Skills</h3>
              <GiSkills className='about_icon'/><br />
              </div>
        
              <ul>
                <li> <small> Communication</small></li>
                <li> <small> Metacognitive Mastery</small></li>
                <li> <small> Team-Leading </small></li>
                <li> <small> Curriculum Develepment</small></li>
                <li> <small> Problem-Solving</small> </li>
                <li> <small> Adaptability </small></li>
                <li> <small> Attention to Detail</small></li>
                <li> <small> Presentation Skills</small></li>
                <li> <small> Assessment and Evaluation</small></li>
                <li> <small> Feedback Delivery</small></li>
                <li> <small> Active Listening</small></li>
              
              </ul>
            
            
             
          
            </article>
             <article className='about__card'>
             <div className='about__card__title'>

              <h3>Impact</h3>
              <BsAward className='about_icon'/><br/>
              </div>
              <ul>
                <li><small> Supported students making an average of 1.75 years  worth of academic growth annually  </small></li>
                <li><small> Collaborated on curriculum design to address real-world challenges effectively </small></li>
                <li><small> Conducted biweekly professional development workshops resulting in organization-wide alignment in achievement</small></li>
                <li><small> Employed logical analysis to evaluate the merits of different solutions to problems</small></li>
                <li><small>  Built strong relationships with students, parents, and colleagues for individualized support</small></li>
                <li><small>  Utilized data analysis and visualization tools to assess and adapt teaching strategies</small></li>
                <li><small>  Conducted biweekly professional development workshops resulting in substantial academic growth</small></li>
              </ul>
             
            </article>


          


          </div>
     
          <blockquote className='about__paragraph'>
          Hey y'all! I'm Syscily, the developer behind the screen. My journey into web development began in 2020. As a teacher working from home, I unexpectedly found myself with ample free time for the first time in my professional career. With so much free time on my hands, I rekindled old passions, like painting, and ventured into uncharted territory - the world of coding.<br /><br/>
          I started playing around with tech out of curiosity and to make the most of my free time. I remembered the days when I used to tweak MySpace profiles by editing the code, and that's when I first got really interested in what technology could do.<br /><br/>
          Fast forward to today, my coding journey has evolved from a pastime born out of boredom to a full-fledged passion. I've delved deep into the intricate world of software development, honing my skills in languages like JavaScript, Python, and beyond. I've built web applications, tackled complex algorithms, and become an AWS Certified Cloud Practioner - each endeavor pushing the boundaries of my technical expertise.<br/><br/>
          What started as a means to fill free hours has transformed into a lifelong quest for knowledge and innovation. My journey in tech continues to be a thrilling adventure, one filled with challenges, triumphs, and the perpetual quest to create and innovate. I'm excited to share this journey with you and to explore the endless possibilities that lie ahead. <br/> <br/>Join me on this exciting expedition into the ever-evolving world of technology!
          </blockquote>
          <div className='about__button'>
            <a href="#contact" id='talk_button' className='btn btn-primary'> Let's Chat!</a>
            </div>

        </div>
      </div>
    </section>
  )
}

export default About
