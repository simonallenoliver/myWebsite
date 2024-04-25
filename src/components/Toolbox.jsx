import React from 'react'

const Toolbox = () => {
    return (
        <div className='toolRow'>
            <div className='toolCol'>


                <h1 id='myTools'>My Tools</h1>
                <div className='toolBox'>
                    <div className='lilToolBox'>
                        <h3>Languages</h3>
                        <p>Python</p>
                        <p>JavaScript</p>
                        <p>C#</p>
                        <p>CSS</p>
                        <p>HTML</p>
                    </div>
                    <div className='lilToolBox'>
                        <h3>Front End</h3>
                        <p>React</p>
                        <p>Vite</p>
                        <p>Ajax</p>
                        <p>Bootstrap</p>
                        <p>.NET</p>
                    </div>
                    <div className='lilToolBox'>
                        <h3>Back End</h3>
                        <p>NODE.js</p>
                        <p>Express</p>
                        <p>Flask</p>
                        <p>.NET</p>
                        <p>Entity</p>
                    </div>
                    <div className='lilToolBox'>
                        <h3>Database</h3>
                        <p>MongoDB</p>
                        <p>Mongoose</p>
                        <p>MySQL</p>
                        <p>Postman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbox