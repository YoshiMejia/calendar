import React from "react";
import Month from "../components/Month";

const MonthView = () => {
    return(
        <div className="monthview">
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