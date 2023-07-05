import React from "react";
import styles from "../../styles/modules/Popup.module.scss";
import classNames from "classnames";

import { PopupWrapper, PopupWrapperProps } from "./PopupWrapper";

type PopupProps = PopupWrapperProps & {
  isOpen: boolean;
};
export function Popup({
  children,
  onClose,
  isOpen,
  maxWidth,
  disableScroll,
  style,
}: PopupProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add("_locked");
    } else {
      document.body.classList.remove("_locked");
    }
  }, [isOpen]);

  return (
    <div
      className={classNames(styles.wrapper, { [styles.closed]: !isOpen })}
      onClick={onClose}>
      <PopupWrapper
        onClose={onClose}
        maxWidth={maxWidth}
        style={style}
        disableScroll={disableScroll}>
        {children}
      </PopupWrapper>
    </div>
  );
}
