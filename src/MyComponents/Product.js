import React, { useEffect, useState } from 'react'
import product1 from '../assets/images/product/product-1.jpg'
import product2 from '../assets/images/product/product-2.jpg'
import product3 from '../assets/images/product/product-3.jpg'
import product4 from '../assets/images/product/product-4.jpg'
import product5 from '../assets/images/product/product-5.jpg'
import product6 from '../assets/images/product/product-6.jpg'

const products = [
    {
        id: 1,
        image: product1,
        name: '1 Signature Collection',
        description: 'A timeless piece designed for meaningful occasions.',
    },
    {
        id: 2,
        image: product2,
        name: '2 Forest Adventure',
        description: 'Inspired by nature, crafted for lasting memories.',
    },
    {
        id: 3,
        image: product3,
        name: '3 Mountain View',
        description: 'A refined choice for elegant celebrations.',
    },
    {
        id: 4,
        image: product4,
        name: '4 Ocean Escape',
        description: 'A fresh and graceful addition to every special moment.',
    },
    {
        id: 5,
        image: product5,
        name: '5 Celebration Essential',
        description: 'Beautifully made to create unforgettable experiences.',
    },
    {
        id: 6,
        image: product6,
        name: '6 Premium Keepsake',
        description: 'Thoughtfully designed for gifting and cherished memories.',
    },
]

const Product = () => {
    const [visibleCount, setVisibleCount] = useState(3)
    const [trackIndex, setTrackIndex] = useState(3)
    const [isResetting, setIsResetting] = useState(false)
    const pageCount = products.length

    useEffect(() => {
        const updateVisibleCount = () => {
            const nextVisibleCount = window.innerWidth < 600
                ? 1
                : window.innerWidth < 992
                    ? 2
                    : 3
            setVisibleCount(nextVisibleCount)
            setTrackIndex(nextVisibleCount)
        }

        updateVisibleCount()
        window.addEventListener('resize', updateVisibleCount)

        return () => window.removeEventListener('resize', updateVisibleCount)
    }, [])

    const activePage = ((trackIndex - visibleCount) % pageCount + pageCount) % pageCount

    useEffect(() => {
        if (pageCount <= 1) return

        const timer = window.setInterval(() => {
            setTrackIndex((currentIndex) => currentIndex + 1)
        }, 5000)

        return () => window.clearInterval(timer)
    }, [pageCount])

    const loopProducts = pageCount > visibleCount
        ? [
            ...products.slice(-visibleCount),
            ...products,
            ...products.slice(0, visibleCount)
        ]
        : products

    const resetLoopPosition = () => {
        if (trackIndex < visibleCount) {
            setIsResetting(true)
            setTrackIndex(pageCount + visibleCount - 1)
        } else if (trackIndex === visibleCount + pageCount) {
            setIsResetting(true)
            setTrackIndex(visibleCount)
        }
    }

    useEffect(() => {
        if (!isResetting) return

        const frame = window.requestAnimationFrame(() => setIsResetting(false))
        return () => window.cancelAnimationFrame(frame)
    }, [isResetting])

    return (
        <section className="product-section bg-white" id="products" aria-label="Featured products">
            <div className="product-carousel-heading">
                <div>
                    <span className="product-eyebrow">OUR COLLECTION</span>
                    <h2>Featured Products</h2>
                </div>
                <div className="product-carousel-arrows">
                    <button
                        type="button"
                        className="product-carousel-arrow"
                        onClick={() => setTrackIndex((currentIndex) => currentIndex - 1)}
                        aria-label="Previous products"
                    >
                        <span aria-hidden="true">&larr;</span>
                    </button>
                    <button
                        type="button"
                        className="product-carousel-arrow"
                        onClick={() => setTrackIndex((currentIndex) => currentIndex + 1)}
                        aria-label="Next products"
                    >
                        <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </div>

            <div className="product-carousel" aria-roledescription="carousel">
                <div
                    className={`product-carousel-track${isResetting ? ' is-resetting' : ''}`}
                    style={{ transform: `translateX(-${trackIndex * (100 / visibleCount)}%)` }}
                    aria-live="polite"
                    onTransitionEnd={resetLoopPosition}
                >
                    {loopProducts.map((product, slideIndex) => (
                        <div
                            className="product-carousel-page"
                            key={`${product.id}-${slideIndex}`}
                            style={{
                                flexBasis: `calc(100% / ${visibleCount})`,
                                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))'
                            }}
                        >
                            <article className="product-card">
                                <img src={product.image} alt={product.name} />
                                <div className="product-info text-center">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <a className="btn" href="#about-section" aria-label="View product">
                                        <span className="content">
                                                                                       <span>View Product</span>
                                        </span>
                                    </a>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

            {pageCount > 1 && (
                <div className="product-carousel-dots" aria-label="Product pages">
                    {products.map((product, pageIndex) => (
                        <button
                            type="button"
                            key={product.id}
                            className={`product-carousel-dot${activePage === pageIndex ? ' is-active' : ''}`}
                            onClick={() => setTrackIndex(visibleCount + pageIndex)}
                            aria-label={`Go to product page ${pageIndex + 1}`}
                            aria-current={activePage === pageIndex ? 'true' : undefined}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Product
