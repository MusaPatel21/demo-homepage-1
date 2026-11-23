import React from 'react'
import aboutimage from '../assets/images/aboutus.jpg';
const AboutUs = () => {
    return (
        <div>
            <section className="about-section bg-white" id="about-section">
                <div className="about-image">
                    <img
                        src={aboutimage}
                        alt="Our team working together"
                    />
                </div>
                <div className="about-content">
                    <span className="about-label">ABOUT US</span>
                    <h2>We Create Something Amazing </h2>
                    <p>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris

                        loris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        We are passionate about delivering quality solutions
                        that help businesses grow. Our goal is to combine
                        creativity, innovation, and technology to create
                        meaningful experiences.
                    </p>
                    <a className="btn" href="#about-section" aria-label="Discover more">
                        <span className="content">
                            <span>Know More</span>
                            <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M5 12h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </a>
                </div>


            </section>
        </div>
    )
}

export default AboutUs
