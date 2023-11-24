import { useContext } from "react";
import CartContext from "../../store/cartContext";
import Modal from "../UI/modal";
import classes from "./cart.module.css";
import CartItem from "./cartItem";

const cartItemRemoveHandler = () => {};

const cartItemAddHandler = () => {};

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items[0].length > 0;
  const totalAmount = cartCtx.totalAmount;

  const cartItems = (
    <ul className={classes.cartItems}>
      {" "}
      {cartCtx.items[0].map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler}
          onAdd={cartItemAddHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>F{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={props.onHideCart}>
          {" "}
          Close
        </button>
        {hasItems && <button className={classes.btn}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
