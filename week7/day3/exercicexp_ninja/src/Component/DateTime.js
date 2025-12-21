import React from "react";
import './DateTime.css';
class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       year:  new Date().getFullYear(),    // Get the four digit year (yyyy)
       month: new Date().getMonth() ,       // Get the month (0-11)
       day: new Date().getDay(),           // Get the weekday as a number (0-6)
       date: new Date().getDate(),          // Get the day as a number (1-31)
       hour: new Date().getHours(),         // Get the hour (0-23)
       minute: new Date().getMinutes(),       // Get the minutes (0-59)
       seconds: new Date().getSeconds(),       // Get the seconds (0-59)
        };
        this.intervalId = null;
  }
    componentDidMount() {
        this.intervalId = setInterval(() => {   
            this.setState({
                year:  new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDay(),
                date: new Date().getDate(),
                hour: new Date().getHours(), 
                minute: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
            });
        }, 1000);   
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        const { year, month, day,date, hour, minute, seconds } = this.state;
        return (
           <div className="clock-container">
      <div className="year">{year}</div>

      <div className="center-time">
        <h2>
          {hour.toString().padStart(2, "0")} :
          {minute.toString().padStart(2, "0")} :
          {seconds.toString().padStart(2, "0")}
        </h2>
        <p>Day {day} – Date {date}</p>
      </div>

      <div className="month">Month {month + 1}</div>
    </div>
        );
    }
}
export default DateTime;