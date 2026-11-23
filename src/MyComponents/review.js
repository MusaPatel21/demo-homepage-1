
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const testimonials = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f",
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39",
  },
  {
    quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c",
  },
];

const AnimatedTestimonials = ({ autoplay = true }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) =>
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="testimonial-section bg-white" id="testimonials">

      <div className="testimonial-container">
        <div className="testimonial-section-heading">
          <span className="product-eyebrow">TESTIMONIALS</span>
          <h2>What Our Clients Say</h2>
        </div>
        <div className="testimonial-grid">

          <div className="testimonial-image-box">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={testimonials[active].src}
                alt={testimonials[active].name}
                className="testimonial-image"
                initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>

          <div className="testimonial-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2>{testimonials[active].name}</h2>

                <p className="testimonial-designation">
                  {testimonials[active].designation}
                </p>

                <p className="testimonial-quote">
                  {testimonials[active].quote}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="testimonial-buttons">
              <button onClick={handlePrev} aria-label="Previous testimonial">
                <IconArrowLeft size={20} />
              </button>

              <button onClick={handleNext} aria-label="Next testimonial">
                <IconArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
