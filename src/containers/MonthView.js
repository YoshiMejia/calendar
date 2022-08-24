import React from "react";
import Month from "../components/Month";
import Banner from "../components/Banner";

const MonthView = () => {
    return(
        <div className="monthview">
        <Banner />
        <Month/>
            <h2>Sunday</h2>
            <h2>Monday</h2>
            <h2>Tuesday</h2>
            <h2>Wednesday</h2>
            <h2>Thursday</h2>
            <h2>Friday</h2>
            <h2>Saturday</h2>
        </div>
    )
}

export default MonthView