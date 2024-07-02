import "./MenuSection.css";
import MenuChips from "../MenuChips/MenuChips";
import MenuItem from "../MenuItem/MenuItem";
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
                    <MenuItem className="menu-item" src="./images/1.png" title="Cheese Beef Hamburger" details="Cheese burger, French fries" price="5.39" sale={false}/>
                    <MenuItem className="menu-item" src="./images/2.png" title="Combo Funny" details="Fried chicken cings, French fries" price="10.35" sale={true}/>
                    <MenuItem className="menu-item" src="./images/3.png" title="Spicy Chicken" details="Chicken with chili garlic sauce" price="7.99" sale={false}/>
                    <MenuItem className="menu-item" src="./images/4.png" title="Mixed Salad" details="Green salad, Tomato, Vinegar" price="3.99" sale={true}/>
                    <MenuItem className="menu-item" src="./images/5.png" title="Chicken Burger" details="Fried chicken burger" price="5.99" sale={false}/>
                    <MenuItem className="menu-item" src="./images/6.png" title="Lemon Ice Tea" details="Fresh lemon, ice, Black tea" price="1.99" sale={false}/>
                </div>
                <div className="menu-bottom">
                    <h6>See all</h6>
                </div>
            </div>
        </div>
    )
}

export default MenuSection