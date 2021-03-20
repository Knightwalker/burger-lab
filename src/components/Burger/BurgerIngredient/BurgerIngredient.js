import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerIngredient.module.css";

const burgerIngredient = (props) => {
  let ingredient = null;

  if (props.type === "bread-bottom") {
    ingredient = <div className={styles.BreadBottom}></div>

  } else if (props.type === "bread-top") {
    ingredient = (
      <div className={styles.BreadTop}>
        <div className={styles.Seeds1}></div>
        <div className={styles.Seeds2}></div>
      </div>
    );

  } else if (props.type === "meat") {
    ingredient = <div className={styles.Meat}></div>
  
  } else if (props.type === "cheese") {
    ingredient = <div className={styles.Cheese}></div>
  
  } else if (props.type === "bacon") {
    ingredient = <div className={styles.Bakon}></div>
  
  } else if (props.type === "salad") {
    ingredient = <div className={styles.Salad}></div>
  
  } else {
    ingredient = null;
  
  }

  return ingredient;

}

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default burgerIngredient;