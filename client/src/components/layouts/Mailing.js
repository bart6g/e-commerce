import React from "react";
import styles from "./mailing.module.scss";

const Mailing = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.form}>
        <h1>Contact us</h1>
        <form>
          <div className={styles.name}>
            <div className={styles.pair}>
              <label htmlFor="name">Forename</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.pair}>
              <label htmlFor="sname">Surname</label>
              <input type="text" id="sname" />
            </div>
          </div>
          <div className={styles.single}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.single}>
            <label htmlFor="textarea">What's on your mind?</label>
            <textarea name="texarea" id="textarea"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mailing;
