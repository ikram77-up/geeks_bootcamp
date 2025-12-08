// Exercice 3
import React, { useState } from "react";
function Phone() {
    const [phone , setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    });
    return (
        <div>
            <h1> My Phone is a {phone.brand} </h1>
            <h3> is a {phone.color} {phone.color} from {phone.year} </h3>
            <button onClick={ () => setPhone({...phone, color: "blue"}) }> Change color </button>
        </div>
    );
}
export default Phone;