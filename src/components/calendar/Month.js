import React from "react";

class Month extends React.Component {
    
    render(){
        const today = new Date()
        const currentMonth = today.toLocaleString('default', { month: 'long' })
        //getting prev month
        today.setMonth(today.getMonth()-1);
        const previousMonth = today.toLocaleString('default', { month: 'long' });
        //getting next month
        today.setMonth(today.getMonth()+2);
        const nextMonth = today.toLocaleString('default', { month: 'long' });

        return(
            <div className="month">
                <h3>{previousMonth}</h3>
                <h1>{currentMonth}</h1>
                <h3>{nextMonth}</h3>
            </div>
        )
    }
}

export default Month