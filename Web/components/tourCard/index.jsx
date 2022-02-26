import styles from "./index.module.css";
function tourCard() {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>Tour Name</h4>
      <p>Description</p>
    </div>
  );
}
export default tourCard;
