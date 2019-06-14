import React from "react";
import "./Title.css";

function Title({ text = "No title" }) {
  return (
    <div id="item-title" className="item-title gold-text">
      {text}
    </div>
  );
}

export default Title;
