import React from "react";
import styles from "../../styles/modules/About.module.scss";

import { ServiceCard } from "./ServiceCard";

import { serviceCardsContext } from "../Card/Card";

export function About() {
  const serviceCardsInfo = React.useContext(serviceCardsContext);

  return (
    <div className={styles.about}>
      <h3 className={styles.title}>About this project</h3>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that
        elevates your screen to a more comfortable viewing height. Placing your monitor at
        eye level has the potential to improve your posture and make you more comfortable
        while at work, helping you stay focused on the task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space
        below your computer to allow notepads, pens, and USB sticks to be stored under the
        stand.
      </p>
      <div className={styles.services}>
        {serviceCardsInfo?.slice(1).map((info, i) => (
          <ServiceCard {...info} key={i} />
        ))}
      </div>
    </div>
  );
}
