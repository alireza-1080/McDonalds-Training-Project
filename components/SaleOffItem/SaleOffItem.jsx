import "./SaleOffItem.css"
import React from 'react'
import { FiShoppingBag } from "react-icons/fi";

function SaleOffItem({ title, details, mainPrice, discountedPrice, src }) {
    console.log(title);
    console.log(details);
    console.log(mainPrice);
    console.log(discountedPrice);
    return (
        <div className="sale-off-item-container">
            <div className="sale-off-fast-food-part-container">
                <h4>Fast Food</h4>
                <h5></h5>
            </div>
            <div className="sale-off-details-container">
                <h2>{title}</h2>
                <h3>{details}</h3>
                <div className="sale-off-prices-container">
                    <h6>{mainPrice}$</h6>
                    <h5>{discountedPrice}$</h5>
                </div>
            </div>
            <img src={src} alt={title} />
            <div className="sale-off-order-button-container">
                <FiShoppingBag className="bag-icon"/>
                <h4>Oreder</h4>
            </div>
        </div>
    )
}

export default SaleOffItem