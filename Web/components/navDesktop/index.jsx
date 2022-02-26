import styles from "./index.module.css";
import Link from "next/link";
function NavDesktop() {
  return (
    <div className={styles.linksWrapper}>
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
export default NavDesktop;
