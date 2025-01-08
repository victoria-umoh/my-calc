import React, { useState } from "react";

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  const handleOriginalPriceChange = (value) => {
    setOriginalPrice(value);
    if (value && discountPercent) {
      const calculatedFinalPrice = value - (value * discountPercent) / 100;
      setFinalPrice(calculatedFinalPrice.toFixed(2));
    } else if (value && finalPrice) {
      const calculatedDiscount = ((value - finalPrice) / value) * 100;
      setDiscountPercent(calculatedDiscount.toFixed(2));
    }
  };

  const handleDiscountPercentChange = (value) => {
    setDiscountPercent(value);
    if (value && originalPrice) {
      const calculatedFinalPrice = originalPrice - (originalPrice * value) / 100;
      setFinalPrice(calculatedFinalPrice.toFixed(2));
    }
  };

  const handleFinalPriceChange = (value) => {
    setFinalPrice(value);
    if (value && originalPrice) {
      const calculatedDiscount = ((originalPrice - value) / originalPrice) * 100;
      setDiscountPercent(calculatedDiscount.toFixed(2));
    } else if (value && discountPercent) {
      const calculatedOriginalPrice = value / (1 - discountPercent / 100);
      setOriginalPrice(calculatedOriginalPrice.toFixed(2));
    }
  };

  return (
    <div className="card mt-5 discount">
      <h2>Jay's Discount Calculator ❤️</h2>
      <div className="row">
            <div style={{ marginBottom: "10px" }}>
                <label className="form-label">
                Bid ($):</label>
                <input
                    className="form-control"
                    type="number"
                    value={originalPrice}
                    onChange={(e) => handleOriginalPriceChange(Number(e.target.value))}
                    style={{ marginLeft: "10px", width: "100%" }}
                />
                
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label for="" className="form-label">
                Placement Bid (%): </label>
                <input
                    className="form-control"
                    type="number"
                    value={discountPercent}
                    onChange={(e) =>
                    handleDiscountPercentChange(Number(e.target.value))
                    }
                    style={{ marginLeft: "10px", width: "100%" }}
                />
                
            </div>
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <label className="form-label">
          Final Bid ($): </label>
          <input
            className="form-control"
            type="number"
            value={finalPrice}
            onChange={(e) => handleFinalPriceChange(Number(e.target.value))}
            style={{ marginLeft: "10px", width: "100%" }}
          />
        
      </div>
    </div>
  );
};

export default DiscountCalculator;
