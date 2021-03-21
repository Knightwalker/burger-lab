import React from "react";
import "./Button.css";

const button = (props) => {
  let stylesArr = [];
  stylesArr.push("Button");
  stylesArr.push(props.btnType);

  return (
    <button 
    className={stylesArr.join(" ")} 
    onClick={props.clicked}>
      {props.children}
    </button>
  );
}

export default button;