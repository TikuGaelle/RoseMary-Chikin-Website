import { useContext } from "react";
import CartContext from "../../../store/cartContext";
import classes from "./mealItem.module.css";
import MealItemForm from "./mealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (quantity) => {
    console.log(quantity);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
    // console.log();
  };

  return (
    <div className={classes.section}>
      <div className={classes.meal}>
        {" "}
        <h3> {props.name}</h3>
        <div className={classes.description}> {props.description}</div>
        {/* toFixed makes sure it is always rendered to 1 decimal place */}
        <div className={classes.price}>{props.price.toFixed(1)}</div>
      </div>

      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default MealItem;
