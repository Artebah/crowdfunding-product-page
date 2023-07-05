import React from "react";
import styles from "../../styles/modules/Main.module.scss";

import FullScreenImage from "../../images/image-hero-desktop.jpg";
import MobileImage from "../../images/image-hero-mobile.jpg";

import { Card } from "../Card/Card";

import { useIsMobile } from "../../hooks";

export function Main() {
  const isMobile = useIsMobile();

  return (
    <main>
      <img
        className={styles["full-screen-image"]}
        src={isMobile ? MobileImage : FullScreenImage}
        alt="full-screen"
      />
      <Card />
    </main>
  );
}
