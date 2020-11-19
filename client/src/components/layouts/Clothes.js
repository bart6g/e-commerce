import React from "react";
import styles from "./clothesbox.module.scss";

const Clothes = ({ title, price, img }) => {
  return (
    <div className={styles.clothesBox}>
      <img src={img} alt={title} />
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};

export default Clothes;
