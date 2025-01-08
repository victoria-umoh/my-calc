import React, { useState } from "react";

const DiscountCalc = () => {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    if (originalPrice && discountPercent) {
      const discount = (originalPrice * discountPercent) / 100;
      setFinalPrice(originalPrice - discount);
    } else {
      alert("Please enter valid values for both fields.");
    }
  };

  const inputFieldEl = document.getElementById("result");

  function clearResult(){
    inputFieldEl.value = "";
  }

  return (
    <div className="card mt-5 mb-5 discount">
      <h2>Discount Calculator</h2>
      <div className="row">
        <div style={{ marginBottom: "10px" }}>
            <label className="form-label">Bid ($):</label>
            <input
                type="number"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                style={{ marginLeft: "10px", width: "100%" }}
                className="form-control"
                id="result"
            />
            
        </div>
        <div style={{ marginBottom: "10px" }}>
            <label className="form-label"> Placement Bid (%):</label>
            <input
                type="number"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(Number(e.target.value))}
                style={{ marginLeft: "10px", width: "100%" }}
                className="form-control"
            />
        </div>
        <button className="btn btn-primary mt-3" onClick={calculateDiscount}>
            Calculate Discount
        </button>
        {finalPrice !== null && (
            <div style={{ marginTop: "20px" }}>
            <h3>Final Price: ${finalPrice.toFixed(2)}</h3>
            </div>
        )}
      </div>
    </div>
  );
};

export default DiscountCalc;
