import React, { useEffect, useRef, useState } from 'react';
import "./Header.css"
import { FaHamburger } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sideBarMenu = useRef()
    let hamburgerMenuHandler = (param) => {
        setIsMenuOpen(param);
        // console.log(sideBarMenu.current.style.left = "0px")
    }

    useEffect(() => {
        console.log(isMenuOpen)
        if (!isMenuOpen) {
            sideBarMenu.current.style.left = "-254.8px";
        } else {
            sideBarMenu.current.style.left = "0px";
        }
    }, [isMenuOpen])

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
                                <a href="#">
                                    Home Page
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Menu
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Promotions
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="#">
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
                        {
                            !isMenuOpen
                                ? <FaHamburger className='burger-menu-icon burger-icon' onClick={() => hamburgerMenuHandler(true)} />
                                : <MdOutlineClose className='burger-menu-icon close-icon' onClick={() => hamburgerMenuHandler(false)} />
                        }
                    </div>
                </div>
                <div className="side-menu-container" ref={sideBarMenu}>
                    <ul>
                        <li><a href="#">Home Page</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Promotions</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header