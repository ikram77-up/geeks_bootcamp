// Exercice 1
import React, {useState} from "react";
import Garage from "./Garage";

function Car(props) {
    const [color, setColor] = useState("red");
    return (
        <> 
        <h3> this car is {color} {props.model} </h3>
       <button onClick={() => setColor("blue")}>
    Change Color
</button>
<Garage size="small" />
        </>
      
    );
}

export default Car;