import React from "react";
import styles from "../../styles/modules/Header.module.scss";

import Logo from "../../images/logo.svg";
import { BurgerMenu } from "./BurgerMenu";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="./#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        {/*<nav className={styles.navigation}>
          <a href="./#">About</a>
          <a href="./#">Discover</a>
          <a href="./#">Get Started</a>
        </nav>*/}
        <BurgerMenu />
      </div>
    </div>
  );
}
