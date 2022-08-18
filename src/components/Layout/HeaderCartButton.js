import React, { useContext, useEffect, useState } from "react";
import hcb from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;
  console.log(items);
  const [isBtnHighilated, setIsBtnHighilated] = useState(false);

  const btnClass = `${hcb.button} ${isBtnHighilated ? hcb.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBtnHighilated(true);
    const timer = setTimeout(() => {
      setIsBtnHighilated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = cartCtx.items.reduce((carNumber, item) => {
    return carNumber + item.amount;
  }, 0);

  return (
    <button className={btnClass} onClick={props.onClick}>
      <span className={hcb.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={hcb.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
