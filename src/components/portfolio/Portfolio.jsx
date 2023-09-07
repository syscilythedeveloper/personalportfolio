import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/portfolio9.png'
import {AiOutlineArrowRight} from 'react-icons/ai'






const Portfolio = () => {
  return (
    <section id='portfolio'>Portfolio
      <h5> Portfolio</h5>
      <h2> Selected Project: Recipe App</h2>
      <div className='project__description'>I created this recipe app to complement my holistic approach to fitness and overall well-being. While I've consistently enjoyed physical fitness, I've recognized the importance of nutrition in achieving my goals. With this in mind, I developed a comprehensive full-stack application designed to assist in discovering nutritious recipes tailored to specific ingredients and nutritional needs. While I'm currently fine-tuning the frontend, the deployment phase is well underway. Scroll to explore the user's journey and experience with the app! </div><br/>
  
      <div className="container portfolio__container">
        <h3> Registered User Happy Path:</h3>
        <article className="portfolio__item">
          <h6>1</h6>
          <div className="portfolio__item-image">
            <img src={IMG1} alt='landingpage' />
          </div>
          <h6> Home Page</h6>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>

        <article className="portfolio__item">
        <h6>2</h6>
          <div className="portfolio__item-image">
            <img src={IMG2} alt='registration' />
          </div>
          <h6> Register Account</h6>
          <h6>*Guests may search for recipes, but must register to store recipes*</h6>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>

        <article className="portfolio__item">
        <h6>3</h6>
          <div className="portfolio__item-image">
            <img src={IMG3} alt='login page'  />
          </div>
          <h6> Choose to search for recipes based on ingredients or nutrients</h6>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>

        <article className="portfolio__item">
        <h6>4</h6>
          <div className="portfolio__item-image">
            <img src={IMG4} alt='logged in home page' />
          </div>
          <h6> Enter ingredients</h6>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>

        <article className="portfolio__item">
        <h6>5</h6>
          <div className="portfolio__item-image">
            <img src={IMG5} alt='recipes' />
          </div>
          <h6>View Recipes</h6>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>

        <article className="portfolio__item">
        <h6>6</h6>
          <div className="portfolio__item-image">
            <img src={IMG6} alt='saving recipes' />
          </div>
          <h6> Store recipes You'd Like to access later by selecting "Save Recipe".</h6>
          <h6>*Red heart turns green once stored*</h6>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>

        <article className="portfolio__item">
        <h6>7</h6>
          <div className="portfolio__item-image">
            <img src={IMG7} alt='view stored recipes'/>
          </div>
          <h6>  View Stored Recipes</h6>
        </article>
        <AiOutlineArrowRight className='portfolio__icon'/>

        <article className="portfolio__item">
        <h6>8</h6>
          <div className="portfolio__item-image">
            <img src={IMG8} alt='delete recipe'/>
          </div>
          <h6> Delete unwanted recipes</h6>
        </article>
        
        <article className="portfolio__item">
        <h6>9</h6>
          <div className="portfolio__item-image">
            <img src={IMG9} alt='updated stored recipes'/>
          </div>
          <h6> View Updated Stored Recipes</h6>
        </article>
        

      </div> 
    
        <div className='github__link'>
        <a href="https://github.com/syscilythedeveloper/NutriRecipe/blob/main/README.md"  className='btn btn-primary' target="_blank" rel="noreferrer">Check out my Github!</a> 
        </div>

    </section>
  )
}

export default Portfolio
