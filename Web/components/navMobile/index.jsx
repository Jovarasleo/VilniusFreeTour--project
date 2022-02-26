import styles from "./index.module.css";
import Link from "next/link";
function NavMobile() {
  return (
    <div className={styles.navMobile}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Tours</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavMobile;
