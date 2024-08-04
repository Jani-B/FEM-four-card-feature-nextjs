import { CardInfo } from "../cardinfo";
import Card from "../cardcontainer/card";
import styles from "./main.module.css";

export default function Main() {
  return (
    <main className={styles.mainContainer}>
      <Card />
    </main>
  );
}
