import React from 'react'
import Toolbox from './Toolbox'

const Hello = () => {
    return (
        <div className='plzWork'>
            <div className='row1'>
                
                <div className='col1'>
                    <h1 id='simonOliver'>Simon Oliver</h1>
                    <h2 id='fullstack'>Full-Stack Developer</h2>
                    <div className='simonPicBox'><img src="/images/newhs.jpg" alt="simon pic" className='simonPic'/></div>
                </div>

                <div className='col2'>
                    <div className='textbox'>
                        <div>
                            <h2 className='aboutMe'>About Me</h2>
                            <p className='longtext'> I love exploring new ideas and delving deep
                                into strange concepts; that’s how I ended up here. After four years of working in sports wagering regulation and
                                compliance, I decided to make a big change and pursue a field that I
                                knew would nurture my curiosity and desire to solve problems with creative solutions. As a full-stack
                                developer, I’ve acquainted myself with a hefty list of tools I’ve used to tackle problems head on -
                                but more importantly, I’ve sharpened my abilities to quickly pick up new tools and adapt to any situation
                                I find myself in.
                            </p>
                        </div>
                    </div>
                    <Toolbox />
                </div>
            </div>
        </div>
    )
}

export default Hello