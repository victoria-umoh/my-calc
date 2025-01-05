import React from "react";
import DiscountCalculator from "./DiscountCalculator";
import DiscountCalc from "./DiscountCalc";
import 'bootstrap/dist/css/bootstrap.min.css';
import './DiscountCalc.css';


function App() {
  return (
    <div className="App">
      <DiscountCalculator />
      <DiscountCalc />
    </div>
  );
}

export default App;
