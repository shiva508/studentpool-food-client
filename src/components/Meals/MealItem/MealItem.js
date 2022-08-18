import React from "react";
import mis from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={mis.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={mis.description}>{props.description}</div>
        <div className={mis.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};
export default MealItem;
