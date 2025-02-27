import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Dipesh Arwat</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>Motivated Full Stack Developer with hands-on experience in building and deploying scalable web applications using the MERN stack. Proficient
in designing user-friendly interfaces, implementing secure authentication systems, and optimizing API performance. Dedicated to building user-
friendly and scalable applications with a focus on performance and security.</p>
                      
                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
