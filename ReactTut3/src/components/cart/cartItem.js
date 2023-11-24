import classes from "./cartItem.module.css";

const CartItem = (props) => {
  const price = `F${props.price}`;
  return (
    <>
      <li className={classes.cartItem}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.quantity}>x {props.quantity}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
          <br />
        </div>
      </li>
    </>
  );
};

export default CartItem;
