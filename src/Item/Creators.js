import React from "react";
import "./Creators.css";

function Creators({ text }) {
  return (
    <div id="item-creator" className="item-creator">
      <b>Creators:</b>
      <br />
      {text}
    </div>
  );
}

export default Creators;
