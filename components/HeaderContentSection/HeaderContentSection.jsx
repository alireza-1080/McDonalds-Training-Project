import "./HeaderContentSection.css";
import { RxLapTimer } from "react-icons/rx";

function HeaderContentSection() {
    return (
        <div className="project-main-container">
            <div className="header-content-section-container">
                <div className="header-content-section-texts-container">
                    <h3>Order your favourite food</h3>
                    <h4>Hamburger has many flavours, have you tried "Cheese Beef Hamburger"?</h4>
                </div>
                <div className="header-content-section-picture-container">
                    <div className="header-content-image-container">
                        <img src="./public/images/McD_burger.png" alt="Cheese Beef Burger" />
                        <div className="header-content-section-delivery-container">
                            <div className="header-content-section-delivery-top-part">
                                <RxLapTimer className="timer-icon"/>
                                <h4>Delivery</h4>
                            </div>
                            <div className="header-content-section-delivery-bottom-part">
                                <h4>30 Mins</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderContentSection