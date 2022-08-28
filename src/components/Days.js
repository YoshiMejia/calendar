import React, {useEffect} from "react";

function Days() {
    useEffect(() => {
        const today = new Date()
        let dd = String(today.getDate()).padStart(2, '0');
        const days = document.querySelectorAll('.days p')
        days.forEach(day => {
            if(day.textContent === dd){
                day.classList.add('today')
            }
    })
    })

    return (
        <div className="days grid">
            <p className="prev-month">28</p>
            <p className="prev-month">29</p>
            <p className="prev-month">30</p>
            <p className="prev-month">31</p>
            <p className="current-month">1</p>
            <p className="current-month">2</p>
            <p className="current-month">3</p>
            <p className="current-month">4</p>
            <p className="current-month">5</p>
            <p className="current-month">6</p>
            <p className="current-month">7</p>
            <p className="current-month">8</p>
            <p className="current-month">9</p>
            <p className="current-month">10</p>
            <p className="current-month">11</p>
            <p className="current-month">12</p>
            <p className="current-month">13</p>
            <p className="current-month">14</p>
            <p className="current-month">15</p>
            <p className="current-month">16</p>
            <p className="current-month">17</p>
            <p className="current-month">18</p>
            <p className="current-month">19</p>
            <p className="current-month">20</p>
            <p className="current-month">21</p>
            <p className="current-month">22</p>
            <p className="current-month">23</p>
            <p className="current-month">24</p>
            <p className="current-month">25</p>
            <p className="current-month">26</p>
            <p className="current-month">27</p>
            <p className="current-month">28</p>
            <p className="current-month">29</p>
            <p className="current-month">30</p>
            <p className="current-month">31</p>           
        </div>
    )
}

export default Days