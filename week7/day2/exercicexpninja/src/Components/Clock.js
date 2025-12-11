import React, {useState, useEffect} from "react";

function Clock() {
    const [currentDate, setCurrentDate] = useState(new Date());

    const tick =() => {
        setCurrentDate(new Date());
    }
    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return(
        <div>
            <h2>Hello World!</h2>
            <h3>It is {currentDate.toLocaleTimeString()} PM</h3>
        </div>
    )
    
}
export default Clock;