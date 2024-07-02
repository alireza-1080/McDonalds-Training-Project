import "./MenuItem.css";
import { PiStarFill } from "react-icons/pi";
import { MdAdd } from "react-icons/md";

function MenuItem({ src, title, details, price, sale }) {

  return (
    <div className="menu-item-container">
      <div className="menu-item-img-container">
        <img src={src} alt={title} />
      </div>
      <div className="menu-item-details-container">
        <h4>{title}</h4>
        <h5>{details}</h5>
        <div className="item-rating-container">
          <PiStarFill className="star-icon" />
          <PiStarFill className="star-icon" />
          <PiStarFill className="star-icon" />
          <PiStarFill className="star-icon" />
          <PiStarFill className="star-icon" />
          <h6>(5)</h6>
        </div>
        <div className="item-pricing-container">
          <h5>{price}$</h5>
          <div className="add-icon-container">
            <MdAdd className="add-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default MenuItem