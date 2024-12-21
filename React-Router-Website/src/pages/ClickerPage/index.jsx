import Clicker from "../../components/Clicker";
import styles from "./ClickerPage.module.css";

export function ClickerPage() {
  return (
    <div className={styles.clickerPageContainer}>
      <h2 className={styles.clickerPageHeadline}>Clicker Page</h2>
      <Clicker />
      <img
        className={styles.clickerPageImg}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauJ6evjDqOODiZ0VkSH0AGIh3ko7BfCTB2g&s"
        alt="cat"
      />
    </div>
  );
}
