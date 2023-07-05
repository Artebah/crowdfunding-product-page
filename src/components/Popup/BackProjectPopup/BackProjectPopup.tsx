import React from "react";
import styles from "../../../styles/modules/BackProjectPopup.module.scss";

import { Popup } from "../Popup";
import { BackProjectPopupCard } from "./BackProjectPopupCard";
import { ThanksPopup } from "../ThanksPopup/ThanksPopup";

import { serviceCardsContext } from "../../Card/Card";

interface BackProjectPopupProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index?: number;
}
export function BackProjectPopup(props: BackProjectPopupProps) {
  const { isOpen, setIsOpen, index } = props;

  const [selectedCardIndex, setSelectedCardIndex] = React.useState(index);
  const [isOpenThanksPopup, setIsOpenThanksPopup] = React.useState(false);

  const backProjectCardsInfo = React.useContext(serviceCardsContext);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Popup isOpen={isOpen} onClose={handleClose} maxWidth={720}>
        <h3 className={styles.title}>Back this project!</h3>
        <p className={styles.text}>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
          world?
        </p>
        <div className={styles.cards}>
          {backProjectCardsInfo?.map((info, i) => (
            <BackProjectPopupCard
              setIsOpen={setIsOpen}
              setSelectedCardIndex={setSelectedCardIndex}
              setIsOpenThanksPopup={setIsOpenThanksPopup}
              isActive={selectedCardIndex !== undefined && selectedCardIndex === i}
              key={i}
              {...info}
            />
          ))}
        </div>
      </Popup>
      <ThanksPopup isOpen={isOpenThanksPopup} setIsOpen={setIsOpenThanksPopup} />
    </>
  );
}
