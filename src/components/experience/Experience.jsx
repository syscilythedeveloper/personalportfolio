import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5> My Skills</h5>
    <h2> Experience</h2>

    <div className="container experience__container">

      <div className="experience_frontend">
        <div className="experience__title">
        <h3>Frontend Development</h3>
        </div>
        <div className="experience__content">
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                 <h4> HTML </h4>
            
              </div>

            
          </article>
          
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4> CSS </h4>
          
            </div>
           
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4> Javascript </h4>
          
            </div>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4> React </h4>
          
            </div>

          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Bootstap </h4>
            
              </div>
          </article>
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
              <h4> JQuery </h4>
          
            </div>

          </article>

        </div>

        {/* End of Frontend */}
   

      </div>
      <div className="experience_backend">
      <div className='experience__title'>
      <h3 >Backend Development</h3>
      </div>
        <div className="experience__content">
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            
            <div>
              <h4> Python </h4>
          
            </div>
          </article>
          
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4> PostgreSQL </h4>
          
              </div>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div> 
            <h4> Flask </h4>
        
            </div>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4> Jinja </h4>
        
            </div>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4> MongoDB </h4>
        
            </div>
          </article>
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <div>
            <h4> Jasmine </h4>
        
            </div>
          </article>

        </div>
        
        
        </div>
    </div>
    </section>
  )
}

export default Experience
