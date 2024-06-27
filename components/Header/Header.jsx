import React from 'react';
import "./Header.css"
import { FaHamburger } from "react-icons/fa";

function Header() {
    return (
        <>
            <header className='project-main-container'>
                <div className="top-header-container">
                    <div className="top-header-logo">
                        <img src="images/logo.png" alt="" />
                    </div>
                    <div className="header-navigation-container">
                        <ul>
                            <li>
                                <a href="">
                                    Homepage
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Promotions
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-buttons-container">
                        <button>Sign in</button>
                        <button>Log in</button>
                    </div>
                    <div className="burger-container">
                        <FaHamburger className='burger-icon' />
                    </div>
                </div>
            </header>
            <main>

            </main>
            <footer>

            </footer></>
    )
}

export default Header