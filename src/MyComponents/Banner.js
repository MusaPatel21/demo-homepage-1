import React, { useEffect, useState } from 'react';
import bannerimg1 from '../assets/images/img-1.jpg';
import bannerimg2 from '../assets/images/img-2.jpg';

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveSlide((currentSlide) => (currentSlide + 1) % 2);
        }, 5000);

        return () => window.clearInterval(timer);
    }, []);

    const slides = [
        {
            image: bannerimg1,
            alt: 'A couple sharing a moment at sunset',
            eyebrow: 'MOMENTS THAT MATTER',
            title: 'Make every moment meaningful',
            description: 'Celebrate the connections, memories, and little moments that make life special.',
            link: '#about-section',
            linkLabel: 'Discover more',
            buttonText: 'Discover More'
        },
        {
            image: bannerimg2,
            alt: 'A couple forming a heart at sunset',
            eyebrow: 'LOVE IN EVERY DETAIL',
            title: 'Create memories that last forever',
            description: 'Turn your most treasured occasions into beautiful stories you will always remember.',
            link: '#gallery',
            linkLabel: 'Explore our gallery',
            buttonText: 'Explore Gallery'
        }
    ];

    return (
        <div>
            <div id="carouselStacked" className="banner-carousel">
                {slides.map((slide, index) => (
                    <div
                        key={slide.title}
                        className={`banner-slide${activeSlide === index ? ' is-active' : ''}`}
                        aria-hidden={activeSlide !== index}
                    >
                        <img src={slide.image} className="banner-image" alt={slide.alt} />
                        <div className="banner-content">
                            <span className="banner-eyebrow">{slide.eyebrow}</span>
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <a className="btn" href={slide.link} aria-label={slide.linkLabel}>
                                <span className="content">
                                    <span>{slide.buttonText}</span>
                                    <svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M5 12h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                ))}

                <div className="carousel-indicators banner-indicators">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.title}
                            type="button"
                            className={`banner-indicator${activeSlide === index ? ' active' : ''}`}
                            aria-current={activeSlide === index ? 'true' : undefined}
                            aria-label={`Show slide ${index + 1}`}
                            onClick={() => setActiveSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
