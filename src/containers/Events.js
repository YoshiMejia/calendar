import React from "react";

const Events = () => {
    return (
        <div className="event-cont">
            <div className="signin clr-bck">
                <a href="#blank" className="signin-btn clr-bck" onClick={e => {e.preventDefault()}}>Sign-In</a>
            </div>

            <div className="addevent clr-bck">
                <a href="#blank" className="addevent-btn clr-bck" onClick={e => {e.preventDefault()}}>Add An Event</a>
                <p className="plus">+</p>
            </div>
        </div>
    )
}

export default Events