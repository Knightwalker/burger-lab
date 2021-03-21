import React from "react";
import Button from "../../UI/Button/Button.js";

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients)
    .map(key => {
      return (
      <li key={key}><span style={{textTransform: "capitalize"}}>{key}</span>: {props.ingredients[key]}</li>
      );
    });

  return (
    <React.Fragment>
     <h3>Your Order</h3>
      <p>a delicious burger with the following ingredients:</p>
      <ul>
        {ingredients}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)} $</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.fCancelPurchaseHandler}>CANCEL</Button>
      <Button btnType="Success" clicked={props.fContinuePurchaseHandler}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default orderSummary;
