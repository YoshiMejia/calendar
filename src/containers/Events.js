import React from "react";

const Events = () => {
    return (
        <div className="event-cont">
            <a href="#blank" className="signin" onClick={e => {e.preventDefault()}}>Sign-In</a>
            <a href="#blank" className="addevent" onClick={e => {e.preventDefault()}}>Add An Event</a>

        </div>
    )
}

export default Events