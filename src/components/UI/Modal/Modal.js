import React from "react";
import Backdrop from "../Backdrop/Backdrop.js";
import "./Modal.css";

const Modal = (props) => {  
  const style = {
    transform: props.display ? "translateY(0)" : "translateY(-100vh)",
    opacity: props.display ? "1" : "0"
  }

  return (
    <React.Fragment>
      <Backdrop display={props.display} clicked={props.clicked}></Backdrop>
      <div className="Modal" style={style}>
        {props.children}
      </div>
    </React.Fragment>
  );
  
}

export default Modal;