import React from "react";
import Modal from "../UI/Modal";
import csm from "./Cart.module.css";
const Cart = (props) => {
  const cartitems = (
    <ul className={csm["cart-items"]}>
      {[{ id: "c1", name: "Suschi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className={csm.total}>
        <span>Total Amount</span>
        <span>39.30</span>
      </div>
      <div className={csm.actions}>
        <button className={csm["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={csm.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
