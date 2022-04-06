import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import { IoIosArrowDropleft } from "@react-icons/all-files/io/IoIosArrowDropleft";
import { IoIosArrowDropright } from "@react-icons/all-files/io/IoIosArrowDropright";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
function NavMobile({ toggle, setToggle, tours, pages }) {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    function calcDimensions(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);
    function DropDownItem(props) {
      return (
        <a
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
          className={styles.iconButton}
          href={props.href}
        >
          <span>{props.leftIcon}</span>
          {props.children}
          <span className={styles.rightIcon}>{props.rightIcon}</span>
        </a>
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
          timeout={500}
          classNames={{
            enter: styles.MenuEnter,
            enterActive: styles.MenuEnterActive,
            exit: styles.MenuExit,
            exitActive: styles.MenuExitActive,
          }}
          onEnter={calcDimensions}
        >
          <div className={styles.menu}>
            <DropDownItem
              goToMenu="freeTours"
              rightIcon={<IoIosArrowDropright />}
              href="#"
            >
              Free Tours
            </DropDownItem>

            <DropDownItem
              goToMenu="privateTours"
              rightIcon={<IoIosArrowDropright />}
              href="#"
            >
              Private Tours
            </DropDownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "freeTours"}
          onEnter={calcDimensions}
          unmountOnExit
          timeout={500}
          classNames={{
            enter: styles.MenuSecondaryEnter,
            enterActive: styles.MenuSecondaryEnterActive,
            exit: styles.menuSecondaryExit,
            exitActive: styles.menuSecondaryExitActive,
          }}
        >
          <div className={styles.menu}>
            <DropDownItem
              leftIcon={<IoIosArrowDropleft />}
              goToMenu="main"
              href="#"
            ></DropDownItem>
            {tours.map((tour, i) => {
              if (tour.type) {
                return (
                  <DropDownItem key={i} href={`/tours/${tour.slug.current}`}>
                    {tour.title}
                  </DropDownItem>
                );
              }
            })}
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "privateTours"}
          onEnter={calcDimensions}
          timeout={500}
          unmountOnExit
          classNames={{
            enter: styles.MenuSecondaryEnter,
            enterActive: styles.MenuSecondaryEnterActive,
            exit: styles.menuSecondaryExit,
            exitActive: styles.menuSecondaryExitActive,
          }}
        >
          <div className={styles.menu}>
            <DropDownItem
              leftIcon={<IoIosArrowDropleft />}
              goToMenu="main"
              href="#"
            ></DropDownItem>
            {tours?.map((tour, i) => {
              if (!tour.type) {
                return (
                  <DropDownItem key={i} href={`/tours/${tour.slug.current}`}>
                    {tour.title}
                  </DropDownItem>
                );
              }
            })}
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
        {pages
          ? pages.map((page, i) => {
              return (
                <li key={i}>
                  <Link href={`/${page.slug.current}`}>
                    <a onClick={() => setToggle(!toggle)}>{page.buttonTitle}</a>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
export default NavMobile;
