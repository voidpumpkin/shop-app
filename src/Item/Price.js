import React from "react";
import "./Price.css";

function Price({ price }) {
  return (
    <div id="item-price" className="item-price gold-text">
      {price ? price.amounts.EUR : "Price Upon Request"}
    </div>
  );
}

export default Price;
