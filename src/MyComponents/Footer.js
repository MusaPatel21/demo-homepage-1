import React from 'react'
import logo from '../assets/images/logo.png'
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconMail,
    IconMapPin,
    IconPhone,
} from '@tabler/icons-react'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-content">
                <div className="site-footer-brand">
                    <a href="/" aria-label="Home">
                        <img src={logo} alt="M and S logo" />
                    </a>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.</p>
                    <div className="site-footer-socials" aria-label="Social media">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <IconBrandInstagram size={18} aria-hidden="true" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <IconBrandFacebook size={18} aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <IconBrandLinkedin size={18} aria-hidden="true" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <IconBrandTwitter size={18} aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <nav className="site-footer-nav" aria-label="Quick links">
                    <h2>Quick Links</h2>
                    <a href="/"><span className="site-footer-link-arrow" aria-hidden="true">&rarr;</span>Home</a>
                    <a href="#about-section"><span className="site-footer-link-arrow" aria-hidden="true">&rarr;</span>About Us</a>
                    <a href="#products"><span className="site-footer-link-arrow" aria-hidden="true">&rarr;</span>Products</a>
                    <a href="#gallery"><span className="site-footer-link-arrow" aria-hidden="true">&rarr;</span>Gallery</a>
                    <a href="#clients"><span className="site-footer-link-arrow" aria-hidden="true">&rarr;</span>Our Clients</a>
                    <a href="#contact-section"><span className="site-footer-link-arrow" aria-hidden="true">&rarr;</span>Contact Us</a>
                </nav>

                <div className="site-footer-contact">
                    <h2>Contact Info</h2>
                    <address className="site-footer-contact-list">
                        <a className="site-footer-contact-item" href="mailto:musapatel23@gmail.com">
                            <IconMail aria-hidden="true" />
                            <span>musapatel23@gmail.com</span>
                        </a>
                        <a className="site-footer-contact-item" href="tel:+918793229733">
                            <IconPhone aria-hidden="true" />
                            <span>+91 8793229733</span>
                        </a>
                        <a
                            className="site-footer-contact-item"
                            href="https://maps.app.goo.gl/ffdQ2GBCEWTU3RnPA"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconMapPin aria-hidden="true" />
                            <span>CVP7+4G2, Katraj Ghat Rd, Sundar nagar, Katraj, Pune, Maharashtra 411046</span>
                        </a>
                    </address>
                </div>

                <div className="site-footer-map">
                    <h2>Find Us</h2>
                    <a
                        className="site-footer-map-link"
                        href="https://maps.app.goo.gl/ffdQ2GBCEWTU3RnPA"
                        target="_blank"
                        rel="noreferrer"
                    >
                    </a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.2885928888445!2d73.86120137465063!3d18.435261971775265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb21b6f1cc75%3A0xd58792790aa69cce!2sNational%20Public%20School!5e1!3m2!1sen!2sin!4v1795431494304!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>

            <div className="site-footer-bottom">
                <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
                <span>
                    Designed and Developed by{' '}
                    <a href="https://www.linkedin.com/in/musa-dilip-patel-926038299/" target="_blank" rel="noreferrer">
                        Musa Patel
                    </a>
                </span>
                <a href="/">Back to top <span aria-hidden="true">&uarr;</span></a>
            </div>
        </footer>
    )
}

export default Footer
