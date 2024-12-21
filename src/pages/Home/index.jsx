import styles from "./Home.module.css";

export function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <h2>Home Page</h2>
      <img
        className={styles.homePageImg}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpg0EJ4GX4BrQF4_L0cPk7TW28DXTMq_z0ZQ&s"
        alt="dog"
      />
    </div>
  );
}
