import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <div className='headerBox'>
      <div className='leftBox'></div>
      <div className='rightBox'>
        <div className='linkBox'>
          <div className='headLinks'><a href="mailto:simonallenoliver@gmail.com"><img src='/images/mail.png' className='icon' alt="email" /></a></div>
          <div className='headLinks'><a href="https://github.com/simonallenoliver" target="_blank"><img src='/images/github.png' className='icon' alt="github" /></a></div>
          <div className='headLinks'><a href="http://www.linkedin.com/in/simon-oliver-66807213b" target="_blank"><img src='/images/linked.png' className='icon' alt="linkedin" /></a></div>
        </div>
      </div>
    </div>


  )
}

export default Header