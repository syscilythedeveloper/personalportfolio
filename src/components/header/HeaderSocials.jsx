import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/syscilybrown" target = "_blank"><BsLinkedin /></a>
        <a href="https://twitter.com/_TheSysSTEM" target = "_blank"><FiTwitter /></a>
        <a href="https://github.com/syscily" target = "_blank"><AiFillGithub /></a>

      
    </div>
  )
}

export default HeaderSocials
