import { CardInfo } from "../cardinfo";
import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
  return (
    <>
      <div className={styles.cardContainer}>
        {CardInfo.map((card) => (
          <div
            key={card.id}
            className={`${styles[card.id]} ${styles.allCards}`}
          >
            <h3 className={styles.header}>{card.cardHeader}</h3>
            <p>{card.cardText}</p>
            <Image
              className={styles.smallImages}
              src={card.picture}
              alt="picture"
              width="40"
              height="40"
            />
          </div>
        ))}
      </div>
    </>
  );
}
