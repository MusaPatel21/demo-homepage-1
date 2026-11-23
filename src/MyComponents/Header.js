import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar md:navbar-expand bg-1 site-header">
                <div className="container-fluid">
                    <a className="navbar-brand site-logo" href="/" aria-label="Homepage">
                        <img src={logo} alt="React homepage" />
                    </a>
                    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" aria-hidden="true"></span>
                    </button>
                    <dialog className="drawer drawer-end bg-white" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
                        <div className="drawer-header">
                            <a className="navbar-brand site-logo" href="/" aria-label="Homepage">
                                <img src={logo} alt="React homepage" />
                            </a>
                            <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>


                        </div>
                        <div className="drawer-body mb-2 md:mb-0 ">
                            <ul className="nav navbar-nav m-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/products">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/gallery">Gallery</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/clients">Clients</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contactus">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="drawer-footer d-flex justify-content-center">
                            <button className="btn mb-3 mobile-only-btn" aria-label="Get started">
                                <span className="content">
                                    <svg
                                        className="icon"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.35 1.83.58 2.79.7A2 2 0 0 1 22 16.92z"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span>Get a Call</span>
                                </span>
                            </button>

                        </div>

                    </dialog>

                    <button className="btn header-get-started" aria-label="Get started">
                        <span className="content">
                            <svg
                                className="icon"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 12h11"
                                    stroke="currentColor"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                                <path
                                    d="M13 6l6 6-6 6"
                                    stroke="currentColor"
                                    stroke-width="1.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                            <span>Get started</span>
                        </span>
                    </button>

                </div>
            </nav>
        </div>
    )
}

export default Header
