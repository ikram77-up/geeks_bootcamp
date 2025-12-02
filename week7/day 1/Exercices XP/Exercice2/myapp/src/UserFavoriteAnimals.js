import React, { Component } from "react";

class UserFavoriteAnimals extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.favAnimals.map((animal) => (
                        <li>{animal}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default UserFavoriteAnimals;