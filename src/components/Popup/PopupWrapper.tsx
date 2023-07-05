import React from "react";
import styles from "../../styles/modules/PopupWrapper.module.scss";

export interface PopupWrapperProps {
  children: React.ReactNode;
  maxWidth: number;
  onClose: () => void;
  style?: React.CSSProperties | undefined;
  disableScroll?: boolean;
}
export function PopupWrapper({
  children,
  maxWidth,
  onClose,
  style = {},
  disableScroll = false,
}: PopupWrapperProps) {
  const scrollStyles = { overflow: "auto", height: "100%", maxHeight: "fit-content" };

  return (
    <div
      style={{
        maxWidth: `${maxWidth}px`,
        ...(!disableScroll ? scrollStyles : {}),
        ...style,
      }}
      className={styles.popup}
      onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className={styles.close}>
        <span></span>
      </button>
      {children}
    </div>
  );
}
