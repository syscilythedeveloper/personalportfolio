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
                 <h4> HTML </h4>              
          </article>
          
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> CSS </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Javascript </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> TypeScript </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> React.js </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
                <h4> Bootstap </h4>  
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> JQuery </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Material-UI </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Redux </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Webpack </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Git </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Prettier </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Vite </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> Tailwind </h4>
          </article>

        </div>
        </div>

        {/* End of Frontend */}
   

     
      <div className="experience_backend">
      <div className='experience__title'>
      <h3 >Backend Development</h3>
      </div>
        <div className="experience__content">

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />     
              <h4> Python </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />     
              <h4> RESTful API </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />     
              <h4> SQLAlchemy </h4>
          </article>
          
          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4> PostgreSQL </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />     
              <h4> Agile Methodologies </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />     
              <h4> Node.js </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4> Flask </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4> Jinja </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />            
            <h4> MongoDB </h4>
          </article>

          <article className = 'experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
            <h4> Jasmine </h4>
          </article>

        </div>
        
        
        </div>
    </div>
    </section>
  )
}

export default Experience
