
import React, { useState } from "react";
import { motion } from "framer-motion";
import forestImage from "../assets/images/gallery/image-1.jpg";
import mountainImage from "../assets/images/gallery/image-2.jpg";
import oceanImage from "../assets/images/gallery/image-3.jpg";

const cards = [
    {
        title: "Forest Adventure",
        src: forestImage,
    },
    {
        title: "Mountain View",
        src: mountainImage,
    },
    {
        title: "Ocean View",
        src: oceanImage,
    },
];

const Gallery = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className="gallery-section bg-white" id="gallery">
            <div className="gallery-container">
                <header className="gallery-heading">
                    <span className="product-eyebrow">OUR GALLERY</span>
                    <h2>Explore Our Gallery</h2>
                </header>
                <div className="images-grid">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            className="image-card"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            animate={{
                                filter:
                                    hovered !== null && hovered !== index
                                        ? "blur(4px)"
                                        : "blur(0px)",
                                scale: hovered === index ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={card.src} alt={card.title} />

                            <div className="image-overlay">
                                <h3>{card.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
