import React from "react";
import Backdrop from "../Backdrop/Backdrop.js";
import "./Modal.css";

const modal = (props) => {
  const style = {
    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
    opacity: props.show ? "1" : "0"
  }

  return (
    <React.Fragment>
      <Backdrop show={props.show} fCancelPurchaseHandler={props.fCancelPurchaseHandler}></Backdrop>
      <div className="Modal" style={style}>
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default modal;