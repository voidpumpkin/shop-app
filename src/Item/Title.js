import React from "react";
import "./Title.css";

function Title({ text }) {
  return (
    <div id="item-title" className="item-title gold-text">
      {text}
    </div>
  );
}

export default Title;
