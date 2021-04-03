import React from "react";
import { Link } from "react-router-dom";
import "./ValorantButton.css";

const ValorantButton = (props) => {

  return (
    <Link to={props.href} style={{display: "inline-block"}} className="btn-valorant">
      <span className="btn-valorant__inner">
        <span className="btn-valorant__slide"></span>
        <span className="btn-valorant__content">{props.children}</span>
      </span>
    </Link>
  );

}

export default ValorantButton;