import styles from "./index.module.css";
function importantMsg({ title, children }) {
  return (
    <div className={styles.important}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.msg}>{children}</p>
    </div>
  );
}
export default importantMsg;
