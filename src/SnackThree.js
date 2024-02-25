import React from "react";
import { Link } from "react-router-dom";

const SnackThree = () => {
return (
    <div>
        <h1>You've selected reese's!</h1>
        <img src="https://m.media-amazon.com/images/I/71A8a79IQ1L.jpg"/>
        <button><Link to="/">Return</Link></button>
    </div>
)
};

export default SnackThree;