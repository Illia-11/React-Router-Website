import { Link } from "react-router";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>Router website</h1>
      <button className={styles.navBtn}>
        <Link to="/">
          Home page
        </Link>
      </button>
      <button className={styles.navBtn}>
        <Link to="/clicker">Clicker page</Link>
      </button>
    </div>
  );
}

export default Header;
