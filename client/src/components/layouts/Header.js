import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styles from "./header.module.scss";
import Button from "../atoms/Button";

const Header = () => {
  const history = useHistory();
  const [openedMenu, setOpenedMenu] = useState(false);

  const handleOpenMenu = () => {
    openedMenu ? setOpenedMenu(false) : setOpenedMenu(true);
  };

  const signIn = () => {
    history.push("/signin");
  };

  const handleCart = () => {
    history.push("/cart");
  };
  return (
    <div className={styles.bg}>
      <nav className={styles.nav}>
        <div className={styles.logo}>BG clothing</div>
        <ul
          className={`${styles.links} ${
            openedMenu ? `${styles.linksActive}` : null
          }`}
        >
          <li className={styles.link}>
            <NavLink to="/" exact activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/men" activeClassName={styles.active}>
              Men
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/women" activeClassName={styles.active}>
              Women
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/sale" activeClassName={styles.active}>
              Sale
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/contact" activeClassName={styles.active}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={styles.btns}>
          <Button onClick={signIn} className={styles.sign}>
            Sign in
          </Button>
          <Button onClick={handleCart} cart></Button>
        </div>
        <div
          className={`${styles.cross} ${openedMenu ? `${styles.close}` : null}`}
          onClick={() => handleOpenMenu()}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
