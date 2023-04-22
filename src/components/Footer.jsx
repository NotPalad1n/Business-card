import React from 'react'

import Twitter from '../images/twitter.png'
import Github from '../images/github.png'
import Facebook from '../images/facebook.png'
import Linkedin from '../images/linkedin.png'
import Instagram from '../images/instagram.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Twitter} alt="Twitter" />
      <img src={Facebook} alt="Facebook" />
      <img src={Instagram} alt="Instagram" />
      <img src={Linkedin} alt="Linkedin" />
      <img src={Github} alt="Github" />
    </div>
  )
}

export default Footer