import React from 'react'

import Email from '../images/email.png'

const Main = () => {
  return (
    <div className='main'>
      <div className='title'>
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <h3>laurasmith.website</h3>
      </div>
      <div className='email'>
        <img src={Email} alt="Email" />
        <p>Email</p>
      </div>
      <div className='text'>
        <div>
          <h1>About</h1>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div>
          <h1>Interests</h1>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
    </div>
  )
}

export default Main