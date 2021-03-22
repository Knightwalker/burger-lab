import React from "react";
import axios from "axios";

import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.js";
import Modal from "../../components/UI/Modal/Modal.js";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary.js";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    }
  }

  updatePurchaseState () {
    const ingredients = { ...this.state.ingredients } // shallow copy
    const sum = Object.keys(ingredients)
    .map(key => {
      return ingredients[key];
    })
    .reduce((sum, el) => {
      return sum + el; 
    }, 0);

    this.setState({purchasable: sum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients } // shallow copy
    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    }, () => {
      console.log(this.state);
      this.updatePurchaseState();
    });
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) { return; }

    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients } // shallow copy
    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    }, () => {
      console.log(this.state);
      this.updatePurchaseState();
    });
  }

  fPurchaseHandler = () => {
    this.setState({purchasing: true});
  }

  fCancelPurchaseHandler = () => {
    this.setState({purchasing: false});
  }

  fContinuePurchaseHandler = async () => {
    // alert("You continue!");

    let order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Max",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    }

    try {
      let response = await axios({
        method: "POST",
        url: "https://burger-lab-1b7ce-default-rtdb.firebaseio.com/orders.json",
        data: order
      });
  
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }

  }

  render() {
    const disabledInfo = { ...this.state.ingredients } // shallow copy
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} fCancelPurchaseHandler={this.fCancelPurchaseHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients} 
            price={this.state.totalPrice}
            fCancelPurchaseHandler={this.fCancelPurchaseHandler} 
            fContinuePurchaseHandler={this.fContinuePurchaseHandler}>   
          </OrderSummary>
        </Modal>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredientHandler={this.addIngredientHandler} 
            removeIngredientHandler={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            fPurchaseHandler={this.fPurchaseHandler}>
          </BuildControls>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;

