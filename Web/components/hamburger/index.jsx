import styles from "./index.module.css";

function Hamburger({ onClick, toggle }) {
  return (
    <button
      className={
        toggle ? styles.hamburger.concat(" ", styles.marked) : styles.hamburger
      }
      onClick={onClick}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}
export default Hamburger;
