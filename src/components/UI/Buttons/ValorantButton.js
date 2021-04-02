import React from "react";
import "./ValorantButton.css";

const ValorantButton = (props) => {

  return (
    <button onClick={props.onClick} className="btn-valorant">
      <span className="btn-valorant__inner">
        <span className="btn-valorant__slide"></span>
        <span className="btn-valorant__content">{props.children}</span>
      </span>
    </button>
  );

}

export default ValorantButton;