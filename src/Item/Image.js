import React from "react";
import "./Image.css";

function Image({ src }) {
  return (
    <div id="item-image-wrapper" className="item-image-wrapper gold-border">
      <img id="item-image" className="item-image" src={src} alt={"item"} />
    </div>
  );
}

export default Image;
