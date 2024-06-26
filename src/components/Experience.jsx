import React from 'react'

const Experience = () => {
    return (
        <>
            <div className='xprow'>
                <div className='xpcontainer'>
                    <div className='xpBox'>
                        <h1 className='exphead'>Experience</h1>
                        <div className='edBox'>
                            <div className='littleEdBox'>
                                <p style={{ fontWeight: "bolder" }}>Caesars Digital</p>
                                <p>Compliance Analyst</p>
                                <p>Responsible Gaming Co-Chair</p>
                                <p>June, 2022 - November, 2023</p>
                            </div>
                            <div className='littleEdBox'>
                                <p style={{ fontWeight: "bolder" }}>Iowa Racing and Gaming Commission</p>
                                <p>Gaming Representative</p>
                                <p>March, 2020 - May, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className='xpBox'>
                        <h1 className='exphead'>Education</h1>
                        <div className='edBox'>
                            <div className='littleEdBox'>
                                <p style={{ fontWeight: "bolder" }}>Coding Dojo</p>
                                <p>March, 2024</p>
                                <p>Full-stack software development bootcamp</p>
                            </div>
                            <div className='littleEdBox'>
                                <p style={{ fontWeight: "bolder" }}>Drake University</p>
                                <p>May, 2019</p>
                                <p>Bachelor of Arts in Politics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='resumeBox'><a href="https://pdflink.to/6537abbc/" target="_blank">View Full Resume</a></div>
        </>
    )
}

export default Experience