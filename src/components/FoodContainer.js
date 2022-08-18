import React, { Fragment, useState } from "react";
import Cart from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

const FoodContainer = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};
export default FoodContainer;
