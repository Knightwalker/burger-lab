import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
  if (props.display === true) {
    return (
      <div className="Backdrop" onClick={props.clicked}></div>
    );
  } else {
    return null;
  }
};

export default Backdrop;
