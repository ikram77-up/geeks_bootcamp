import React, { Component } from "react";
import "./Exercise.css";
class Exercise extends Component {


    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <>
                <header >Header</header>
                <div>
                    <h1 style={style_header}>Exercice 3</h1>
                </div>
                <div>
                    <p className="para">hello in your space for Learn react</p>
                </div>
                <div>
                    <form>
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text" id="fname" name="fname" /><br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text" id="lname" name="lname" />
                    </form>
                    <a href="https://reactjs.org">Learn React</a>
                </div>
                <br />
                <div>
                    <img src="https://reactjs.org/logo-og.png" alt="logo" />
                    <ul>
                        <li>hooks</li>
                        <li>props</li>
                        <li>components</li>
                    </ul>
                </div>
            </>


        );

    }
}
export default Exercise