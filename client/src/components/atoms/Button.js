import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import styles from "./button.module.scss";
const Button = ({ onClick, children, cart }) => {
  return !cart ? (
    <>
      <button onClick={() => onClick()} className={styles.btn}>
        {children}
      </button>
    </>
  ) : (
    <button onClick={() => onClick()} className={styles.cart}>
      <span>
        <CgShoppingCart />
      </span>
    </button>
  );
};

export default Button;
