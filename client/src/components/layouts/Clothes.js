import React from "react";
import styles from "./clothesbox.module.scss";

const Clothes = ({ title, price, img, topic }) => {
  return (
    <div className={styles.clothesBox} style={{backgroundColor: `${topic==='women'? '#2D5151': '#721717'}`}}>
      <img src={img} alt={title} />

      <div className={styles.info}>
      <p>{title}</p>
      <p>{price}</p>
      <div className={styles.btns}>
      <button>Details</button>
      <button>Add to cart</button>
      </div>
      </div>
    </div>
  );
};

export default Clothes;
