import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";
import { IoMdArrowDropleft } from "@react-icons/all-files/io/IoMdArrowDropleft";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import { IoIosArrowDropleft } from "@react-icons/all-files/io/IoIosArrowDropleft";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
function NavMobile({ toggle, setToggle, tours }) {
  const [dropdown, setDropdown] = useState(false);
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    const dropdownRef = useRef(null);

    function calcDimensions(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);
    function DropDownItem(props) {
      return (
        <button
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
          className={styles.iconButton}
        >
          {props.leftIcon}
          {props.children}
        </button>
      );
    }
    return (
      <div
        className={styles.dropdownWrapper}
        style={{ height: menuHeight }}
        ref={dropdownRef}
      >
        <CSSTransition
          in={activeMenu === "main"}
          unmountOnExit
          timeout={25000}
          classNames={{
            enter: styles.MenuEnter,
            enterActive: styles.MenuEnterActive,
            exit: styles.MenuExit,
            exitActive: styles.MenuExitActive,
          }}
          onEnter={calcDimensions}
        >
          <div className={styles.menu}>
            <DropDownItem goToMenu="freeTours">Free Tours</DropDownItem>

            <DropDownItem goToMenu="privateTours">Private Tours</DropDownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "freeTours"}
          onEnter={calcDimensions}
          unmountOnExit
          timeout={25000}
          classNames={{
            enter: styles.MenuSecondaryEnter,
            enterActive: styles.MenuSecondaryEnterActive,
            exit: styles.menuSecondaryExit,
            exitActive: styles.menuSecondaryExitActive,
          }}
        >
          <div className={styles.secondaryMenu}>
            <DropDownItem
              leftIcon={<IoIosArrowDropleft />}
              goToMenu="main"
            ></DropDownItem>
            <ul className={styles.dropdown}>
              {tours.map((tour, i) => {
                if (tour.type) {
                  return (
                    <li key={i}>
                      <a href={`/tours/${tour.slug.current}`}>{tour.title}</a>{" "}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "privateTours"}
          onEnter={calcDimensions}
          timeout={25000}
          unmountOnExit
          classNames={{
            enter: styles.MenuSecondaryEnter,
            enterActive: styles.MenuSecondaryEnterActive,
            exit: styles.menuSecondaryExit,
            exitActive: styles.menuSecondaryExitActive,
          }}
        >
          <div className={styles.secondaryMenu}>
            <DropDownItem
              leftIcon={<IoIosArrowDropleft />}
              goToMenu="main"
            ></DropDownItem>
            <ul className={styles.dropdown}>
              {tours?.map((tour, i) => {
                if (!tour.type) {
                  return (
                    <li key={i}>
                      <a href={`/tours/${tour.slug.current}`}>{tour.title}</a>{" "}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </CSSTransition>
      </div>
    );
  }
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
        {dropdown ? <DropdownMenu /> : null}
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
