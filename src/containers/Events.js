import React, { Component } from "react";
import Today from "../components/events/Today";
import EventModal from "../components/events/EventModal";

class Events extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
      }
    
      showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };

    render(){
        return (
            <div className="event-cont">
                <div className="signin clr-bck">
                    <a href="#blank" className="signin-btn clr-bck" onClick={e => {e.preventDefault()}}>Sign-In</a>
                </div>
    
                <Today />
                
                <div className="addevent clr-bck">
                    <a href="#blank" className="addevent-btn clr-bck" onClick={this.showModal}>Add An Event</a>
                    <a href="#blank" className="plus clr-bck" onClick={this.showModal}>+</a>
                </div>
                <EventModal show={this.state.show} handleClose={this.hideModal}/>
            </div>
        )
    }
}

export default Events