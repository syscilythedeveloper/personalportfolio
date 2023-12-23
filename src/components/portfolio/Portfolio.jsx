import React from 'react'
import './portfolio.css'
import gamehub from "../../assets/gamehub.png"

import {AiOutlineArrowRight} from 'react-icons/ai'






const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> Portfolio</h5>
      <h2> Selected Projects </h2>
      
  
      <div className="container portfolio__container">
        <div className='project'> 
          <h5>Game Hub</h5>
        
          <div className="project__description">
          <p>Unleash the power of gaming with the Gaming Hub — a dynamic project that revolutionizes your gaming experience. This application, driven by TypeScript, Chakra UI, and the rawg.io API, provides an intuitive platform for gamers.</p>
          </div>
          </div>
  
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={gamehub} alt='landingpage' />
          </div>
          <div className='links'>
            <a href="https://github.com/syscilythedeveloper/game_app" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://game-90rwrobiq-syscily-browns-projects.vercel.app/" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>


      </div> 
    
        <div className='github__link'>
        <a href="https://github.com/syscilythedeveloper/NutriRecipe/blob/main/README.md"  className='btn btn-primary' target="_blank" rel="noreferrer">Check out my Github!</a> 
        </div>

    </section>
  )
}

export default Portfolio
