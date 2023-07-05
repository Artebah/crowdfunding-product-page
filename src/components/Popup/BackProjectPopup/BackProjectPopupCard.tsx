import React from "react";
import styles from "../../../styles/modules/BackProjectPopupCard.module.scss";
import classNames from "classnames";

import type { ServiceCardInfoType } from "../../../types";

import { Button } from "../../Button/Button";

import { useIsMobile } from "../../../hooks";

type BackProjectPopupCardProps = ServiceCardInfoType & {
  isActive: boolean;
  setSelectedCardIndex: React.Dispatch<React.SetStateAction<number | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenThanksPopup: React.Dispatch<React.SetStateAction<boolean>>;
};
export function BackProjectPopupCard(props: BackProjectPopupCardProps) {
  const {
    id,
    title,
    pledge,
    content,
    placesLeft,
    isOutOfStock,
    isActive,
    setSelectedCardIndex,
    setIsOpen,
    setIsOpenThanksPopup,
  } = props;
  const pledgeInputRef = React.useRef<HTMLInputElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const onSubmitHandle = () => {
    const value = pledgeInputRef.current?.value;
    if (value) {
      var regex = /^[0-9]+$/;
      if (!regex.test(value)) {
        alert("Invalid characters entered :( Please enter numbers only");
        return;
      }
      if (pledge && Number(value) < pledge) {
        alert("The pledge is less than available :(");
        return;
      }

      setIsOpen(false);
      setTimeout(() => {
        setIsOpenThanksPopup(true);
      }, 300);
      return;
    } else {
      alert("Please enter the pledge first");
    }
  };
  const onSelectCardHandle = () => {
    setSelectedCardIndex(id);
  };

  return (
    <div
      onClick={isOutOfStock ? undefined : onSelectCardHandle}
      className={classNames(
        styles.card,
        { [styles.active]: isActive },
        { [styles.disabled]: isOutOfStock }
      )}>
      <div
        className={styles.top}
        style={{
          borderBottom: isActive ? "1px solid #d9d9d9" : "0",
        }}>
        <div className={styles["radio-button"]}>
          <div className={classNames({ [styles.selected]: isActive })}></div>
          <input type="radio" name="radio-button" />
        </div>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {pledge && (
            <>
              <h4 className={styles.pledge}>Pledge ${pledge} or more</h4>
              {!isMobile && (
                <div className={styles["places-left"]}>
                  <span>{placesLeft}</span>
                  left
                </div>
              )}
            </>
          )}
        </div>
        <p className={styles.content}>{content}</p>
        {isMobile && placesLeft !== null && (
          <div className={styles["places-left"]}>
            <span>{placesLeft}</span>
            left
          </div>
        )}
      </div>
      <div
        ref={bottomRef}
        className={classNames(styles.bottom, { [styles.opened]: isActive })}>
        <p>Enter your pledge</p>
        <div className={styles["pledge-input"]}>
          <span>$</span>
          <input
            defaultValue={pledge?.toString()}
            ref={pledgeInputRef}
            name="pledge-input"
            type="text"
          />
        </div>
        <Button onClick={onSubmitHandle}>Continue</Button>
      </div>
    </div>
  );
}
