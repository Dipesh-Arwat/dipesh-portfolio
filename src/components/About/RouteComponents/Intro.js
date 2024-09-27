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
                        <p data-aos='fade-right' data-aos-delay='200'>Motivated and dedicated Full Stack Developer with hands-on experience in both front-end and back-end technologies, particularly with the MERN stack.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>I have completed internships at Sarvi Solutions and DC InfoTech Pvt Ltd.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>My skills include React.js, Node.js, MongoDB, and Express.js, and I am always eager to expand my knowledge and contribute to impactful projects.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>I’m excited to bring my expertise and passion for coding to your team.</p>

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro