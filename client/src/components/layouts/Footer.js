import React from "react";
import styles from "./footer.module.scss";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.bg}>
      <footer className={styles.footer}>
        <div className={styles.logos}>
          <div className={styles.logo}>BG clothing</div>
          <div className={styles.icons}>
            <ImFacebook2 />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>

        <div className={styles.about}>
          <h4>About BG</h4>
          <p>Our Story</p>
          <p>Careers</p>
          <p>Corporate Responsibility</p>
          <p>Corporate Sales</p>
        </div>
        <div className={styles.about}>
          <h4>Customer Service</h4>
          <p>Shipping & Returns</p>
          <p>Fit & Size Chart</p>
          <p>Contact Us</p>
          <p>Accessibility Statement</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
