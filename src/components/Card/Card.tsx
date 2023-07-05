import React from "react";
import styles from "../../styles/modules/Card.module.scss";

import serviceCardsInfo from "../../mock/serviceCardsInfo.json";

import { Button } from "../Button/Button";
import { About } from "../About/About";
import { BackProjectPopup } from "../Popup/BackProjectPopup/BackProjectPopup";

import MasterCraftLogo from "../../images/logo-mastercraft.svg";

import type { ServiceCardInfoType } from "../../types";

export const serviceCardsContext = React.createContext<ServiceCardInfoType[] | null>(
  null
);

export function Card() {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  const onButtonBookmarkHandle = () => {
    setIsBookmarked(!isBookmarked);
  };
  const openPopupHandle = () => {
    setIsOpenPopup(true);
  };

  return (
    <serviceCardsContext.Provider value={serviceCardsInfo}>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={MasterCraftLogo} alt="mastercraft logo" />
            </div>
            <h2 className={styles.title}>Mastercraft Bamboo Monitor Riser</h2>
            <p className={styles.subtitle}>
              A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div className={styles.actions}>
              <Button onClick={openPopupHandle}>Back this project</Button>
              <BackProjectPopup isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} />

              <Button
                isBookmarkStyle
                isBookmarked={isBookmarked}
                onClick={onButtonBookmarkHandle}></Button>
            </div>
          </div>
          <div className="score">
            <div className={styles["score-items"]}>
              <div className={styles["score-item"]}>
                <h4>$89,914</h4>
                <p>of $100,000 backed</p>
              </div>
              <div className={styles["score-item"]}>
                <h4>5,007</h4>
                <p>total backers</p>
              </div>
              <div className={styles["score-item"]}>
                <h4>56</h4>
                <p>days left</p>
              </div>
            </div>
            <div className={styles["progress-bar"]}>
              <span style={{ width: "90%" }}></span>
            </div>
          </div>

          <About />
        </div>
      </div>
    </serviceCardsContext.Provider>
  );
}
