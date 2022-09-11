import React, { Component } from "react";
import Today from "../components/events/Today";

class Events extends Component {
    
    render(){
        return (
            <div className="event-cont">
                <div className="signin clr-bck">
                    <a href="#blank" className="signin-btn clr-bck" onClick={e => {e.preventDefault()}}>Sign-In</a>
                </div>
    
                <Today />
                
                <div className="addevent clr-bck">
                    <a href="#blank" className="addevent-btn clr-bck" onClick={e => {e.preventDefault()}}>Add An Event</a>
                    <a href="#blank" className="plus clr-bck" onClick={e => {e.preventDefault()}}>+</a>
                </div>
            </div>
        )
    }
}

export default Events