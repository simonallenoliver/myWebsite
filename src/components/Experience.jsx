import React from 'react'

const Experience = () => {
    return (
        <div className='xprow'>
            <div className='xpBox'>
                <h1 className='exphead'>Experience</h1>
                <div className='edBox'>
                <div className='littleEdBox'>
                        <p>Caesars Digital</p>
                        <p>Compliance Analyst</p>
                        <p>Responsible Gaming Co-Chair</p>
                        <p>June, 2022 - November, 2023</p>
                    </div>
                    <div className='littleEdBox'>
                        <p>Iowa Racing and Gaming Commission</p>
                        <p>Gaming Representative II</p>
                        <p>March, 2020 - May, 2022</p>
                    </div>
                </div>
            </div>
            <div className='xpBox'>
                <h1 className='exphead'>Education</h1>
                <div className='edBox'>
                    <div className='littleEdBox'>
                        <p>Coding Dojo | March, 2024</p>
                        <p>Fullstack software developement bootcamp</p>
                    </div>
                    <div className='littleEdBox'>
                        <p>Drake University | May, 2019</p>
                        <p>BA Political Science</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience