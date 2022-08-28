import React from "react";
import Month from "../components/Month";
import Banner from "../components/Banner";
import Days from "../components/Days";
import Arrows from "../components/Arrows";

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