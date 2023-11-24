import { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    console.log(
      action.item,
      action.item.price,
      action.item.quantity,
      updatedTotalAmount
    );
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    console.log("adding item to cart");
    dispatchCartState({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", id: id });
  };
  // console.log(cartState);

  const cartContext = {
    items: [cartState.items],
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <>
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
