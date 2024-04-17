import React from 'react'

const Projects = () => {
    return (
        <div className='projRow'>
            <div className='projectSection'>
                <h1 id='Projects'>Projects</h1>
                <h2>Click one of the images to watch a short presentation on the project</h2>
                <div className='projectContainer'>
                    <div className='projectBox'>
                        <h2>Leafy</h2>
                        <p>a plant ecommerce website I built with JS, React and MongoDB</p>
                        <a href="https://youtu.be/DoZp1ffD8QA?t=698" target="_blank"><div className='imageBox'><img src="/images/leafySC.png" className='projectImage' alt="sand screenshot" /></div></a>
                        
                    </div>
                    <div className='projectBox'>
                        <h2>Sand</h2>
                        <p>a short browser interactive story I built using Python, Flask and MySQL</p>
                        <a href="https://youtu.be/gJuLIOO7wyo?t=15" target='_blank'><div className='imageBox'><img src="/images/sandScreenShot.png" className='projectImage' alt="sand screenshot" /></div></a>
                        
                    </div>
                    <div className='projectBox'>
                        <h2>Forsaken Forest</h2>
                        <p>a little 2d game I made using the Godot game engine's Python-like language, GDScript</p>
                        <a href="https://youtu.be/GQEFtYfaGDI?t=105" target='_blank'><div className='imageBox'><img src="/images/forsakenSC.png" className='projectImage' alt="sand screenshot" /></div></a>
                        
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Projects