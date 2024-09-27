import React from 'react'

import '../../../styles/About/Route/Experience.scss'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">I<span>nterests</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>Hobbies</h2>
                               
                                <ul>
                                   
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Playing Kabbadi</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Watching Movies </span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600'>
                                        <span>Listening to Music</span>
                                    </li>
                                    
                                </ul>
                            </div>

                           
                            <div className="experience__box">
                                <h2>Languages</h2>
                                
                                <ul>
                                    
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>English</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Marathi</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='600' data-aos-offset="-5000">
                                        <span>Hindi</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience