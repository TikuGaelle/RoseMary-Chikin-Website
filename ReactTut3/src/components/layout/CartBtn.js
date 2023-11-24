import { useContext } from "react";
import CartContext from "../../store/cartContext";
import CartIcon from "../cart/CartIcon";
import classes from "./CartBtn.module.css";
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      {console.log(cartCtx)}
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span> Your Cart</span>
        <span className={classes.badge}>
          {/* length is not used because we do not want to add
          duplicate items on the list, but only one item with different quantities */}

          {/* {console.log(cartCtx.items.length)} */}
          {/* {cartCtx.items.reduce((currentNum, item) => {
            return currentNum + item.amount;
          }, 0)} */}

          {cartCtx.items[0].length}
        </span>
      </button>
    </>
  );
};

export default CartButton;
