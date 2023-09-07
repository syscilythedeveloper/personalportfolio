import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#'className='footer__logo'>SyscilyTheDeveloper</a>
      <ul className='permalinks'>
        <li><a href="#"> Home</a></li>
        <li><a href="#about"> About</a></li>
        <li><a href="#experience"> Experience</a></li>
        <li><a href="#services"> Services</a></li>
        <li><a href="#portfolio"> Portfolio</a></li>
        <li><a href="Contact"> Contact</a></li>

      </ul>

      <div className='footer__socials'>
        <a href="https://linkedin.com/in/syscilybrown" target = "_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://twitter.com/_TheSysSTEM" target = "_blank" rel="noreferrer"><FiTwitter /></a>
        <a href="https://github.com/syscilythedeveloper" target = "_blank" rel="noreferrer"><AiFillGithub /></a>

      
    </div>

    <div className="footer__copyright">
      <small>&copy; SyscilyTheDeveloper. All rights reserved.</small>
    </div>
    </footer>
  )
}

export default Footer
