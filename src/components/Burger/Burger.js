import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient.js";
import "./Burger.css";

const burger = (props) => {
  // console.log(props.ingredients);

  // Variant 1
  // var arrIngredients = Object.keys(props.ingredients).map(key => {
  //   return [...Array(props.ingredients[key])].map((_, i) => {
  //     return <BurgerIngredient key={key + i} type={key}></BurgerIngredient>
  //   });
  // }).reduce((arr, el) => {
  //   return arr.concat(el);
  // }, []);

  // Variant 2 (Custom)
  var arrIngredients = [];
  var arrIngredientsKeys = Object.keys(props.ingredients);
  var arrIngredientsKeysLength = arrIngredientsKeys.length;
  for (let i = 0; i < arrIngredientsKeysLength; ++i) {
    let key = arrIngredientsKeys[i];
    for (let j = 0; j < props.ingredients[key]; ++j) {
      arrIngredients.push(<BurgerIngredient key={key+j} type={key}></BurgerIngredient>);
    }
  }
  
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {(arrIngredients.length > 0) ? arrIngredients : <p>Please start adding ingredients!</p>  }
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
}

export default burger;