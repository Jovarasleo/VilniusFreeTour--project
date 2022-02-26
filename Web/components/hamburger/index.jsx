import styles from "./index.module.css";
function Hamburger({ onClick }) {
  return (
    <div className={styles.hamburger} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Hamburger;
