import React from "react";

const Events = () => {
    return (
        <div className="event-cont">
            <div className="signin">
                <a href="#blank" className="signin-btn" onClick={e => {e.preventDefault()}}>Sign-In</a>
            </div>

            <div className="addevent">
                <a href="#blank" className="addevent-btn" onClick={e => {e.preventDefault()}}>Add An Event</a>
            </div>
        </div>
    )
}

export default Events