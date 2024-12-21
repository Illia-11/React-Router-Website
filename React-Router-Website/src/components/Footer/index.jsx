import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h2 className={styles.footerHeader}>Footer</h2>
      <h4 className={styles.footerText}>Our company has a license</h4>
    </footer>
  );
}
