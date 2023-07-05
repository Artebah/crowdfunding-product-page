import React from "react";
import styles from "../../../styles/modules/ThanksPopup.module.scss";

import CheckIcon from "../../../images/icon-check.svg";

import { Button } from "../../Button/Button";
import { Popup } from "../Popup";

interface ThanksPopupProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function ThanksPopup({ isOpen, setIsOpen }: ThanksPopupProps) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popup
      disableScroll
      isOpen={isOpen}
      onClose={handleClose}
      maxWidth={540}
      style={{
        textAlign: "center",
      }}>
      <div className={styles["success-icon"]}>
        <img src={CheckIcon} alt="check icon" />
      </div>
      <h3 className={styles.title}>Thanks for your support!</h3>
      <p className={styles.text}>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser
        worldwide. You will get an email once our campaign is completed.
      </p>
      <Button onClick={handleClose}>Got it!</Button>
    </Popup>
  );
}
