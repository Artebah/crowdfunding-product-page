import React from "react";
import styles from "../../styles/modules/About.module.scss";

import type { ServiceCardInfoType } from "../../types";

import { Button } from "../Button/Button";
import { BackProjectPopup } from "../Popup/BackProjectPopup/BackProjectPopup";

export function ServiceCard(props: ServiceCardInfoType) {
  const { id, title, pledge, content, placesLeft, isOutOfStock = false } = props;

  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  const onButtonPopupHandle = () => {
    setIsOpenPopup(true);
  };

  return (
    <div
      className={
        !isOutOfStock
          ? styles["service-card"]
          : `${styles["service-card"]} ${styles["disabled-card"]}`
      }>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.pledge}>Pledge ${pledge} or more</p>
      </div>
      <p>{content}</p>
      <div className={styles.bottom}>
        <div className={styles["places-left"]}>
          <span>{placesLeft}</span>left
        </div>
        <Button disabled={isOutOfStock} onClick={onButtonPopupHandle}>
          {!isOutOfStock ? "Select Reward" : "Out of stock"}
        </Button>
        <BackProjectPopup index={id} isOpen={isOpenPopup} setIsOpen={setIsOpenPopup} />
      </div>
    </div>
  );
}
