import React from "react";
import { Link } from "react-router-dom";

const SnackTwo = () => {
    return (
        <div>
            <h1>You've selected rips!</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27uZP1Jcs5YW-sIb8hKKWSJmAMMKDqfAxpQ&usqp=CAU"/>
            <button><Link to="/">Return</Link></button>
        </div>
    )
};

export default SnackTwo;

