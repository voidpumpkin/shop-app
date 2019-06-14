import React from "react";
import "./Description.js";

function Description({ text = "No description available" }) {
  return (
    <div id="item-description" className="item-description">
      <b>Description:</b>
      <br />
      {text}
    </div>
  );
}

export default Description;
