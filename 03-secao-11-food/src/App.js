import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/Store/CartProvider";

function App() {
 const [showCart, setShowCart] =  useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  }
  const hideCartHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && < Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
