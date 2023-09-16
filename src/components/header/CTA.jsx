import React from 'react'
import SB_Resume from '../../assets/SB_Resume.pdf'

const CTA = () => {
  return (
   <div className="cta">
    <a href={SB_Resume} download className='btn'>Download Resume </a>
    <a href='#contact' className='btn btn-primary'>Let's Connect ! </a>
   </div>
  )
}

export default CTA
