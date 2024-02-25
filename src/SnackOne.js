import React from "react";
import { Link } from "react-router-dom";

const SnackOne = () => {
    return (
        <div>
            <h1>You've selected lays!</h1>
            <img src="https://m.media-amazon.com/images/I/91NjwbVi0+L._AC_UF1000,1000_QL80_.jpg"/>
            <button><Link to="/">Return</Link></button>
        </div>
    )
};

export default SnackOne