//Exercice 1
import React, { Component } from "react";
class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
     handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
       if(this.state.counter === 5){
        throw new Error("I crashed!");
       }
        return (
            <div>
                
                 <h1 onClick={this.handleClick}>{this.state.counter}</h1>
            </div>
        );
    }
}

export default BuggyCounter;
