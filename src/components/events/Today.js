import React from "react";

const Today = () => {

    const d = new Date();
    let day = d.getDay();
    let dateNum = String(d.getDate());
    let month = d.getMonth()

    switch (day) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        default:
        day = "Doomsday";
      }

      switch (month) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
           month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
          month = "November";
          break;
        case 11:
          month = "December";
          break;
        default:
        month = "Doomsday";
      }

    return(
        <>

        <div className="ev-today clr-bck">
            {day}
        </div>
        <div className="ev-month clr-bck">
            {month.toUpperCase()}
        </div>
        <div className="ev-date clr-bck">
            {dateNum}
        </div>

        <div className="ev-appt-date clr-bck">
          <p className="clr-bck">3</p>
          <p className="clr-bck">14</p>
          <p className="clr-bck">26</p>
        </div>
        
        <div className="ev-appts clr-bck">
          <p className="clr-bck ev-appt-1">Dermatologist</p>
          <p className="clr-bck ev-appt-2">Networking Meetup</p>
          <p className="clr-bck ev-appt-3">Vacation</p>
        </div>
        </>

    )
}

export default Today