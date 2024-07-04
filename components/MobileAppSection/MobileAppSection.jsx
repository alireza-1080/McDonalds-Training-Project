import "./MobileAppSection.css";
import React from 'react';
import DownloadButton from "../DownloadButton/DownloadButton";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function MobileAppSection() {
    return (
        <div className="mobile-app-section-container">
            <div className="mobile-app-details-section">
                <h3>Exclusive offers and more</h3>
                <h4>MCDONALD’S MOBILE APP</h4>
                <h5>As a global No. 1 fast food brand, McDonald's wishes to bring customers not only delicious and hygienic food of international standards but also the best service experience.</h5>
                <div className="mobile-app-download-buttons-section">
                    <DownloadButton source={"App Store"}><FaAppStoreIos className="app-download-logo-icon"/></DownloadButton>
                    <DownloadButton source={"Google Play"}><FaGooglePlay className="app-download-logo-icon"/></DownloadButton>
                </div>
            </div>
            <div className="mobile-app-image-section">
                <img src="./images/mobile-app.png" alt="" />
            </div>
        </div>
    )
}

export default MobileAppSection;