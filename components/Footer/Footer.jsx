import "./Footer.css"
import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-details-section">
            <div className="footer-useful-links-section">
                <h3>USEFUL LINKS</h3>
                <ul>
                    <li><a href="#">Home Page</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Promotions</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-opening-hours-section">
                <h3>OPENING HOUR</h3>
                <ul>
                    <li>
                        <h6>Monday - Friday: 9:00 - 23:00</h6>
                    </li>
                    <li>
                        <h6>Saturday: 9:00 - 20:00</h6>
                    </li>
                    <li>
                        <h6>Sunday: 10:00 - 19:00</h6>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-media-section">
            <div className="footer-macdonald-section">
                <img src="./images/logo.png" alt="McDonald's" />
                <h4>McDonald's</h4>
            </div>
            <div className="footer-media-logos-section">
                <FaTwitter className="media-icon" />
                <FaFacebook className="media-icon" />
                <FaInstagram className="media-icon" />
            </div>
        </div>
    </div>
  )
}

export default Footer