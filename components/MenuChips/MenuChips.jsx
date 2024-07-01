import React from 'react';
import "./MenuChips.css"

function MenuChips({text, isActive,children}) {
    return (
        <div className={isActive ? "chips-container active" : "chips-container"}>
            <div className={isActive ? 'chips-child active' : 'chips-child'}>{children}</div>
            <h6 className={isActive ? "active" : ""}>{text}</h6>
        </div>
    )
}

export default MenuChips