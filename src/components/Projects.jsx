import React from 'react'

const Projects = () => {
    return (
        <div className='projRow'>
            <div className='projectSection'>
                <h1>Projects</h1>
                <div className='projectContainer'>
                    <div className='projectBox'>
                        <h2>Leafy</h2>
                        <p>a plant ecommerce website I built with JS, React and MongoDB</p>
                    </div>
                    <div className='projectBox'>
                        <h2>Forsaken Forest</h2>
                        <p>a little 2d game I made using the Godot game engine's Python-like language, GDScript</p>
                    </div>
                    <div className='projectBox'>
                        <h2>Sand</h2>
                        <p>a short choose your own adventure game I built using Python, Flask and MySQL</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects