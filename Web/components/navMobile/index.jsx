import styles from "./index.module.css";
import { useState } from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
function NavMobile({ toggle, setToggle, tours }) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className={styles.navMobile}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a onClick={() => setToggle(!toggle)}>Home</a>
          </Link>
        </li>
        <li>
          <button href="/" onClick={() => setDropdown(!dropdown)}>
            <a>
              Tours
              {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
            </a>
          </button>
        </li>
        {dropdown
          ? tours.map((singleTour, i) => {
              return (
                <li key={i} className={styles.marginLeft}>
                  <Link href={`/tours/${singleTour.slug.current}`}>
                    <a onClick={() => setToggle(!toggle)}>{singleTour.title}</a>
                  </Link>
                </li>
              );
            })
          : null}
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
