import React from "react";
import styles from "../../styles/modules/BurgerMenu.module.scss";

export function BurgerMenu() {
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const menuBodyRef = React.useRef<HTMLElement>(null);

  const toggleOrRemoveClassNames = (method: "toggle" | "remove") => {
    const menuButton = menuButtonRef.current;
    const menuBody = menuBodyRef.current;

    if (menuButton && menuBody) {
      if (method === "toggle") {
        document.body.classList.toggle("_locked");
        menuButton.classList.toggle(styles._active);
        menuBody.classList.toggle(styles._opened);
      } else {
        document.body.classList.remove("_locked");
        menuButton.classList.remove(styles._active);
        menuBody.classList.remove(styles._opened);
      }
    }
  };

  return (
    <div>
      <button
        onClick={() => toggleOrRemoveClassNames("toggle")}
        ref={menuButtonRef}
        type="button"
        className={styles["icon-menu"]}>
        <span></span>
      </button>
      <nav
        onClick={() => toggleOrRemoveClassNames("remove")}
        ref={menuBodyRef}
        className={styles.body}>
        <ul onClick={(e) => e.stopPropagation()} className={styles.list}>
          <li className={styles.item}>
            <a href="./#">About</a>
          </li>
          <li className={styles.item}>
            <a href="./#">Discover</a>
          </li>
          <li className={styles.item}>
            <a href="./#">Get Started</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
