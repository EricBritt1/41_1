import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <h2>Please select snack!</h2>
      <div>
        <Link to="/snack-one">
          <button>Snack One</button>
        </Link>
        <Link to="/snack-two">
          <button>Snack Two</button>
        </Link>
        <Link to="/snack-three">
          <button>Snack Three</button>
        </Link>
      </div>
    </div>
  );
};


export default VendingMachine;
