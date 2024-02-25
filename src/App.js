import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import VendingMachine from "./VendingMachine";
import SnackOne from "./SnackOne";
import SnackTwo from "./SnackTwo";
import SnackThree from "./SnackThree";


//Next time I work on an application like this I'll just have all snacks listed inside of a snack file.

//What I've learned through this exercise
/*
  - BrowserRouter should always be put in the outermost componenet (App!)
  - Should only have one BrowserRouter
  - Make sure to create a route for every componenet needed to be generated
  - Use Link with to prop to navigate amongst paths in app
*/

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/"
                element={<VendingMachine/>} />
                <Route path="/snack-one" element={<SnackOne />} />
                <Route path="/snack-two" element={<SnackTwo />} />
                <Route path="/snack-three" element={<SnackThree />} />
            </Routes>
        </BrowserRouter>
</div>
)
}

export default App;
