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
                    <h2>Sun</h2>
                    <h2>Mon</h2>
                    <h2>Tue</h2>
                    <h2>Wed</h2>
                    <h2>Thu</h2>
                    <h2>Fri</h2>
                    <h2>Sat</h2>
                </div>
            <Arrows />
            <Days />
        </div>
    )
}

export default MonthView