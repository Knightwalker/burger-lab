import React from "react";
import "./Backdrop.css";

const orderSummary = (props) => {
  return (
   props.show ? <div className="Backdrop" onClick={props.isClicked}></div> : null
  );
};

export default orderSummary;
