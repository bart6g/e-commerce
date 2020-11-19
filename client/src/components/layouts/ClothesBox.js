import React from "react";
import styles from "./clothesbox.module.scss";
import Clothes from "./Clothes.js";

const ClothesBox = ({ topic, clothes }) => {
  const showClothes = clothes.map((item) => (
    <Clothes
      key={item.id}
      title={item.title}
      price={item.price}
      img={item.img}
    />
  ));
  return (
    <div className={styles.bg}>
      <h3>Welcome to {topic} side</h3>
      <div className={styles.container}>{showClothes}</div>
    </div>
  );
};

export default ClothesBox;