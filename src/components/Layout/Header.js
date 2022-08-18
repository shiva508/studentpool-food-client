import React, { Fragment } from "react";
import hs from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={hs.header}>
        <h1>Studentpool Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={hs["main-image"]}>
        <img src={mealsImg} alt="Meals "></img>
      </div>
    </Fragment>
  );
};
export default Header;
