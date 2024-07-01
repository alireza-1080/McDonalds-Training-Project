import "./MenuSection.css";
import MenuChips from "../MenuChips/MenuChips";
import { MdLocalOffer } from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { GiCakeSlice } from "react-icons/gi";
import { GiChickenLeg } from "react-icons/gi";

function MenuSection() {
    return (
        <div className="project-main-container">
            <div className="menu-section-container">
                <div className="menu-top">
                    <h4>MENU</h4>
                    <div className="menu-chips-container">
                        <MenuChips isActive={true} text={"Offers"}>{<MdLocalOffer />}</MenuChips>
                        <MenuChips text={"Hamburgers"}>{<PiHamburgerFill />}</MenuChips>
                        <MenuChips text={"Fried Chicken"}>{<GiChickenLeg />}</MenuChips>
                        <MenuChips text={"Dessert"}>{<GiCakeSlice />}</MenuChips>
                        <MenuChips text={"Drink"}>{<BiSolidCoffeeTogo />}</MenuChips>
                    </div>
                </div>
                <div className="menu-main">

                </div>
                <div className="menu-bottom">

                </div>
            </div>
        </div>
    )
}

export default MenuSection