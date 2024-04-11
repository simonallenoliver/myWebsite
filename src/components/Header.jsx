import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <div className='headerBox'>
      <div className='leftBox'></div>
      <div className='rightBox'>
        <div className='linkBox'>
          <div className='headLinks'>contact - <a href="mailto:simonallenoliver@gmail.com">Send an Email</a></div>
          <div className='headLinks'><a href="https://github.com/simonallenoliver" target="_blank">github</a></div>
          <div className='headLinks'><a href="http://www.linkedin.com/in/simon-oliver-66807213b" target="_blank">linkedin</a></div>
        </div>
      </div>
    </div>


  )
}

export default Header