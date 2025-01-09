import React, { useState } from "react";

const DiscountCalculator = () => {
  const [Bid, setBid] = useState("");
  const [bidPlacement, setBidPlacement] = useState("");
  const [totalBid, setTotalBid] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  const handleBidChange = (value) => {
    setBid(value);
    if (value && bidPlacement) {
      const placementBidDecimal = bidPlacement / 100;
      const calculatedFinalPrice = value * placementBidDecimal + value;
      if (!isNaN(calculatedFinalPrice)) {
        setFinalPrice(calculatedFinalPrice.toFixed(2));
      } else {
        setFinalPrice(""); // Clear final price if calculation fails
      }
    }
  };

  const handleBidPlacementChange = (value) => {
    setBidPlacement(value);
    if (value && Bid) {
      const placementBidDecimal = value / 100;
      const calculatedFinalPrice = Bid * placementBidDecimal + Bid;
      if (!isNaN(calculatedFinalPrice)) {
        setFinalPrice(calculatedFinalPrice.toFixed(2));
      } else {
        setFinalPrice(""); // Clear final price if calculation fails
      }
    }
  };  

  const handleFinalPriceChange = (value) => {
    setFinalPrice(value);
    if (value && Bid) {
      // Calculate Placement Bid Percentage
      const calculatedTotalBid = value - Bid;
      const calculatedPlacementBid = (calculatedTotalBid / Bid) * 100;
      setTotalBid(calculatedTotalBid.toFixed(2));
      setBidPlacement(calculatedPlacementBid.toFixed(2));
    } else if (value && bidPlacement) {
      // Calculate Original Bid
      const placementBidDecimal = bidPlacement / 100;
      const calculatedBid = value / (1 + placementBidDecimal);
      const calculatedTotalBid = value - calculatedBid;
      setBid(calculatedBid.toFixed(2));
      setTotalBid(calculatedTotalBid.toFixed(2));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      setBid("");
      setBidPlacement("");
      setTotalBid("");
      setFinalPrice("");
    }
  };

  return (
    <div className="card mt-5 discount" onKeyDown={handleKeyDown}>
      <h2 className="text-center">Jay's Bid Calculator ❤️</h2>
      <div className="row">
        <div className="mt-4">
          <label className="form-label">Bid ($):</label>
          <input
            className="form-control"
            type="number"
            value={Bid}
            onChange={(e) => handleBidChange(Number(e.target.value))}
          />
        </div>

        <div className="mt-4">
          <label className="form-label">Placement Bid (%): </label>
          <input
            className="form-control"
            type="number"
            value={bidPlacement}
            onChange={(e) => handleBidPlacementChange(Number(e.target.value))}
          />
        </div>

        <div className="mt-4 d-none">
          <label className="form-label">Total Bid ($): </label>
          <input
            className="form-control"
            type="number"
            value={totalBid}
            readOnly
          />
        </div>

        <div className="mt-4 mb-3">
          <label className="form-label">Final Bid ($): </label>
          <input
            className="form-control"
            type="number"
            value={finalPrice}
            onChange={(e) => handleFinalPriceChange(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountCalculator;
