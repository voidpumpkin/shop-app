import React from "react";
import "./Description.js";

function Description({ text }) {
  return (
    <div id="item-description" className="item-description">
      <b>Description:</b>
      <br />
      {text}
    </div>
  );
}

export default Description;
