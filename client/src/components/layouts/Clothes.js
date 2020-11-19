import React from "react";
import styles from "./clothesbox.module.scss";
import { useHistory } from "react-router-dom";

const Clothes = (props) => {
  const { id, title, price, img, topic } = props;
  const history = useHistory();
  const getDetail = (props) => {
    console.log(props);
    history.push(`/${topic}/${id}`);
  };
  return (
    <div
      className={styles.clothesBox}
      style={{
        backgroundColor: `${topic === "women" ? "#2D5151" : "#721717"}`,
      }}
    >
      <img src={img} alt={title} />

      <div className={styles.info}>
        <p>{title}</p>
        <p>{price}</p>
        <div className={styles.btns}>
          <button onClick={() => getDetail(props)}>Details</button>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Clothes;
