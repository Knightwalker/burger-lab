import React from "react";
import Burger from "../../components/Burger/Burger.js";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.js";

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
      totalPrice: 4
    }
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
    });
  }

  render() {
    const disabledInfo = { ...this.state.ingredients } // shallow copy
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredientHandler={this.addIngredientHandler} 
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}>
        </BuildControls>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;

