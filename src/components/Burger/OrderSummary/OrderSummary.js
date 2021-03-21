import React from "react";
import Button from "../../UI/Button/Button.js";

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log("[OrderSummary] will update");
  }
  
  render() {
    const ingredients = Object.keys(this.props.ingredients)
    .map(key => {
      return (
      <li key={key}><span style={{textTransform: "capitalize"}}>{key}</span>: {this.props.ingredients[key]}</li>
      );
    });

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>a delicious burger with the following ingredients:</p>
        <ul>
          {ingredients}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.fCancelPurchaseHandler}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.fContinuePurchaseHandler}>CONTINUE</Button>
      </React.Fragment>
    );
  }
};

export default OrderSummary;
