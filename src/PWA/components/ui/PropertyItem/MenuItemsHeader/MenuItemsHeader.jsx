import React from "react";
import logo from "../../../../assets/images/logo.svg";
import burger from "../../../../assets/images/burger-icon.svg";

import styles from "./menuItemsHeader.module.scss";
import { Logo } from "../../Logo/Logo";

const MenuItemsHeader = ({ onClick }) => {
  return (
    <div className={styles.header_container}>
      {/* <img src={logo} alt="prop part logo" width="73px" height="28px" /> */}
      <Logo />
      <p className={styles.header_text}>
        Real estate agency in Dubai <br /> with 15 years of experience
      </p>
      <button className={styles.menu_btn} onClick={onClick}>
        <img src={burger} alt="menu burger icon" width="20px" height="14px" />
      </button>
    </div>
  );
};

export default MenuItemsHeader;
