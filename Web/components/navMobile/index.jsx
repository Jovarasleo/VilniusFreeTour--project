import styles from "./index.module.css";
import Link from "next/link";
function NavMobile({ toggle, setToggle }) {
  return (
    <div className={styles.navMobile}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a onClick={() => setToggle(!toggle)}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a onClick={() => setToggle(!toggle)}> Tours</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={() => setToggle(!toggle)}>About Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavMobile;
