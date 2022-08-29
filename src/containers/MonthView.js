import React from "react";
import Month from "../components/calendar/Month";
import Banner from "../components/calendar/Banner";
import Days from "../components/calendar/Days";
import Arrows from "../components/calendar/Arrows";

const MonthView = () => {
    return(
        <div className="monthview">
            <Banner />
            <Month/>
                <div className="weekdays grid">
                    <h2>Sunday</h2>
                    <h2>Monday</h2>
                    <h2>Tuesday</h2>
                    <h2>Wednesday</h2>
                    <h2>Thursday</h2>
                    <h2>Friday</h2>
                    <h2>Saturday</h2>
                </div>
            <Arrows />
            <Days />
        </div>
    )
}

export default MonthView