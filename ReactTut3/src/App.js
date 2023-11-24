import { useState } from "react";
import Cart from "./components/cart/cart";
import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import CartProvider from "./store/cartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const showCartHandler = () => {
    setCartOpen(true);
  };

  const hideCartHandler = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
