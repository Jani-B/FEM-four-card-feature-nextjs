import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header/header";
import Main from "./main/main";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
    </>
  );
}
