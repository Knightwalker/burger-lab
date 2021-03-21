import React from "react";
import BuildControl from "./BuildControl/BuildControl.js";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>Current Price: <strong>{props.price.toFixed(2)} $</strong></p>
      {controls.map(ctrl => {
        return (
          <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            addIngredientHandler={() => props.addIngredientHandler(ctrl.type)}
            removeIngredientHandler={() => props.removeIngredientHandler(ctrl.type)}
            disabled={props.disabled[ctrl.type]}>
          </BuildControl>
        );
      })}
      <button 
        className="OrderButton" 
        disabled={!props.purchasable}
        onClick={props.fPurchaseHandler}>
        ORDER NOW
      </button>
    </div>
  );
}

export default buildControls;