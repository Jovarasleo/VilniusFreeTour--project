import styles from "./index.module.css";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";
import { IoMdArrowDropleft } from "@react-icons/all-files/io/IoMdArrowDropleft";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

function NavDesktop({ tours }) {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

  function DropdownMenu() {
    const [firstClick, setFirstClick] = useState(false);
    const [activeMenu, setActiveMenu] = useState("main");
    function changeState(first, second) {
      setFirstClick(first);
      setActiveMenu(second);
    }

    function DropDownItem(props) {
      return (
        <button onClick={() => props.onClick()}>
          <div className={styles.iconButton}>{props.leftIcon}</div>
          <li>{props.children}</li>
        </button>
      );
    }
    function MainMenu() {
      return (
        <div className={firstClick ? styles.back : null}>
          <DropDownItem onClick={() => changeState(true, "freeTours")}>
            <IoMdArrowDropright className={styles.menuArrow} />
            <a>Free Tours</a>
          </DropDownItem>

          <DropDownItem onClick={() => changeState(true, "privateTours")}>
            <div className={styles.dropdownButtonWrapper}>
              <IoMdArrowDropright className={styles.menuArrow} />
              <a>Private Tours</a>
            </div>
          </DropDownItem>
        </div>
      );
    }
    function FreeTours() {
      return (
        <>
          <div>
            <DropDownItem
              leftIcon={<IoMdArrowDropleft />}
              onClick={() => setActiveMenu("main")}
            ></DropDownItem>
          </div>
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
        </>
      );
    }
    function PrivateTours() {
      return (
        <>
          <div>
            <DropDownItem
              leftIcon={<IoMdArrowDropleft />}
              onClick={() => setActiveMenu("main")}
            ></DropDownItem>
          </div>
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
        </>
      );
    }
    return (
      <div className={styles.dropdownWrapper} ref={ref}>
        {activeMenu === "main" && <MainMenu />}
        {activeMenu === "freeTours" && <FreeTours />}
        {activeMenu === "privateTours" && <PrivateTours />}
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
        <li onClick={() => setDropdown(!dropdown)}>
          <button>
            <a>
              Tours
              {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
            </a>
          </button>
        </li>
        {dropdown ? <DropdownMenu /> : null}
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
