import React from "react";
import "./Loader.css";

function Loader({ style }) {
  return (
    <div id="loader-wrapper" className="loader-wrapper" style={style}>
      <div id="loader" className="loader"></div>
    </div>
  );
}

export default Loader;
