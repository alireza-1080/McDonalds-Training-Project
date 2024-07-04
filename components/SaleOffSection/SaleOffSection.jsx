import "./SaleOffSection.css"
import React from 'react'
import SaleOffItem from "../SaleOffItem/SaleOffItem"

function SaleOffSection() {
    return (
        <div className="sale-off-section-container">
            <div className="sale-off-title-container">
                <h4>Promotions</h4>
            </div>
            <div className="sale-off-items-container">
                <SaleOffItem title={"combo funny"} details={"buy 1 funny combo get 1 coca cola"} mainPrice={"12.5"} discountedPrice={"9.99"} src={"./images/promo1.png"}/>
                <SaleOffItem title={"SALAD MIXED VINEGAR"} details={"extra sauce"} mainPrice={"7.5"} discountedPrice={"4.99"} src={"./images/promo2.png"}/>
                <SaleOffItem title={"CHICKEN BUGGER"} details={"free french fries"} mainPrice={"10"} discountedPrice={"8.99"} src={"./images/promo3.png"}/>
            </div>
        </div>
    )
}

export default SaleOffSection