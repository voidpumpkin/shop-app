import React from "react";
import "./Measurements.css";

function Measurements({ text }) {
  return (
    <div id="item-measurements" className="item-measurements">
      <b>Measurements:</b>
      <br />
      {text}
    </div>
  );
}

export default Measurements;
