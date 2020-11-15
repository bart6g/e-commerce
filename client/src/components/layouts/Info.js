import React from "react";
import styles from "./info.module.scss";

const Info = ({ img, title, desc, btn }) => {
  return (
    <div
      className={styles.box}
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      <div></div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className={styles.btn}>{btn}</button>
    </div>
  );
};

export default Info;
