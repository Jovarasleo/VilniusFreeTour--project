import styles from "./index.module.css";

function Hamburger({ onClick, toggle }) {
  return (
    <div
      className={
        toggle ? styles.hamburger.concat(" ", styles.marked) : styles.hamburger
      }
      onClick={onClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default Hamburger;
