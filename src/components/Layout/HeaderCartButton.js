import React from "react";
import hcb from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={hcb.button} onClick={props.onClick}>
      <span className={hcb.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={hcb.badge}>408</span>
    </button>
  );
};

export default HeaderCartButton;
