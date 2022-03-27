import styles from "./index.module.css";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import { IoIosArrowDropleft } from "@react-icons/all-files/io/IoIosArrowDropleft";
import { IoIosArrowDropright } from "@react-icons/all-files/io/IoIosArrowDropright";
import Link from "next/link";
import { useEffect, useState, useRef, useContext } from "react";
import { CSSTransition } from "react-transition-group";
function NavDesktop({ tours, pages }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);

  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    function calcDimensions(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
    const handleClickOutside = (event) => {
      if (
        !wrapperRef?.current?.contains(event.target) &&
        !innerRef.current?.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    useEffect(() => {
      setMenuHeight(wrapperRef.current?.firstChild.offsetHeight);
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);
    function DropDownItem(props) {
      return (
        <button
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
          className={styles.iconButton}
        >
          {props.leftIcon}
          {props.children}
          {props.rightIcon}
        </button>
      );
    }
    return (
      <div
        className={styles.dropdownWrapper}
        style={{ height: menuHeight }}
        ref={wrapperRef}
      >
        <CSSTransition
          in={activeMenu === "main"}
          onEnter={calcDimensions}
          unmountOnExit
          timeout={300}
          classNames={{
            enter: styles.MenuEnter,
            enterActive: styles.MenuEnterActive,
            exit: styles.MenuExit,
            exitActive: styles.MenuExitActive,
          }}
        >
          <div className={styles.menu}>
            <DropDownItem
              rightIcon={<IoIosArrowDropright />}
              goToMenu="freeTours"
            >
              <p>Free Tours</p>
            </DropDownItem>
            <DropDownItem
              rightIcon={<IoIosArrowDropright />}
              goToMenu="privateTours"
            >
              <p>Private Tours</p>
            </DropDownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === "freeTours"}
          onEnter={calcDimensions}
          unmountOnExit
          timeout={300}
          classNames={{
            enter: styles.MenuSecondaryEnter,
            enterActive: styles.MenuSecondaryEnterActive,
            exit: styles.menuSecondaryExit,
            exitActive: styles.menuSecondaryExitActive,
          }}
        >
          <div>
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
          timeout={300}
          unmountOnExit
          classNames={{
            enter: styles.MenuSecondaryEnter,
            enterActive: styles.MenuSecondaryEnterActive,
            exit: styles.menuSecondaryExit,
            exitActive: styles.menuSecondaryExitActive,
          }}
        >
          <div>
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
    <div className={styles.linksWrapper}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <button onClick={() => setDropdown(!dropdown)} ref={innerRef}>
            <a>Tours</a>
            {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
          </button>
        </li>
        {dropdown ? <DropdownMenu /> : null}
        {pages
          ? pages.map((page, i) => {
              return (
                <li key={i}>
                  <Link href={`/${page.slug.current}`}>
                    <a>{page.buttonTitle}</a>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export default NavDesktop;
