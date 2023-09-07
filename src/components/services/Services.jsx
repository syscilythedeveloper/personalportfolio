import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const MyServices = () => {
  return (
    <section id='services'>Services
    <h5> What I Offer</h5>
    <h2> Services</h2>
    <div className="container services__container">

      <article className="service">
        <div className="service__head">
          <h3> Software Engineering and Development </h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon' />
            Expertise in software design, object-oriented programming, debugging, and full-stack development
          </li>
          <li>
          <BiCheck className='service__list-icon' />
             Proficiency in JavaScript, React, MySQL, AWS, Python, HTML, CSS, Flask, and PostgreSQL
          </li>
          <li>
          <BiCheck className='service__list-icon' />
         Experience in designing and implementing web applications
          </li>
          <li>
          <BiCheck className='service__list-icon' />
         Skills in optimizing data storage and retrieval, creating intuitive user interfaces, and implementing secure user authentication
          </li>
          
        </ul>
       

      </article>
      {/* End of UX UI*/}
      <article className="service">
        <div className="service__head">
          <h3> STEM Education and Instruction </h3>
        </div>
        <ul className="service__list">
          <li>
          <BiCheck className='service__list-icon' />
         Nine years of specialized STEM instruction experience
          </li>
          <li>
          <BiCheck className='service__list-icon' />
         Demonstrated ability to design and implement engaging and interactive lesson plans that focus on critical thinking and problem-solving skills
          </li>
          <li>
          <BiCheck className='service__list-icon' />
         Utilization of data analysis and visualization tools to assess student learning outcomes and adapt teaching strategies.
          </li>
          
        </ul>

      </article>
      {/*End of web development */}
      <article className="service">
        <div className="service__head">
          <h3> Consultation and Curriculum Design</h3>
        </div>
        <ul className="service__list">
          <li>
          <BiCheck className='service__list-icon' />
         Collaborative expertise with cross-functional teams to design curriculum addressing specific challenges effectively
          </li>
          <li>
          <BiCheck className='service__list-icon' />
         Facilitation of professional development workshops, resulting in substantial academic growth
          </li>
          <li>
          <BiCheck className='service__list-icon' />
         Support for teachers in integrating technology tools, software, and resources into STEM lessons to enhance student engagement and learning outcomes.
          </li>
          <li>
          <BiCheck className='service__list-icon' />
         Recommendations of new educational technologies, virtual simulations, and hands-on kits to enrich STEM learning environments
          </li>
          
        </ul>

      </article>
      {/*End of curriculum development */}
    </div>
    
    
    </section>


  )
}

export default MyServices
