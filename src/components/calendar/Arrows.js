import React from "react";

const Arrows = () => {

    const left = require('../../media/left.png');
    const right = require('../../media/right.webp');
    return(
        <div className="arrows">
            <img src={left} alt="left arrow" className="left arrow"></img>
            <img src={right} alt="right arrow" className="right arrow"></img>
        </div>
    )
}

export default Arrows