import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.headersContainer}>
      <h1
        className={`${styles.poppinsExtralight} ${styles.headers} ${styles.h1}`}
      >
        Reliable, efficient delivery
      </h1>
      <h2 className={`${styles.poppinsSemibold} ${styles.headers}`}>
        Powered by Technology
      </h2>
      <p className={`${styles.poppinsExtralight} ${styles.headers}`}>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </header>
  );
}
