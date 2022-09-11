import React from "react";

const RightArrow = () => {

    // const left = require('../../media/left.png');
    // const right = require('../../media/right.webp');
    return(
        <div className="right-arrow">
            {/* <img src={left} alt="left arrow" className="left arrow"></img>
            <img src={right} alt="right arrow" className="right arrow"></img> */}
            <div className="right-cont">
                <a href="#blank" className="right arrow">
                    &gt;
                </a>
            </div>
        </div>
    )
}

export default RightArrow