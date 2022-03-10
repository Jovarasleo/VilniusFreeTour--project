import styles from "./index.module.css";
import { IoMdArrowDropright } from "@react-icons/all-files/io/IoMdArrowDropright";
import { IoMdArrowDropleft } from "@react-icons/all-files/io/IoMdArrowDropleft";
import { IoMdArrowDropdown } from "@react-icons/all-files/io/IoMdArrowDropdown";
import Link from "next/link";
import { useState } from "react";

function NavDesktop({ tours }) {
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    function DropDownItem(props) {
      return (
        <button onClick={() => props.onClick()}>
          <div className="icon-button">{props.leftIcon}</div>
          <li>{props.children}</li>
        </button>
      );
    }
    function MainMenu() {
      return (
        <div className={styles.dropdown}>
          <DropDownItem onClick={() => setActiveMenu("freeTours")}>
            <a>Free Tours</a>
          </DropDownItem>

          <DropDownItem onClick={() => setActiveMenu("privateTours")}>
            <a>Private Tours</a>
          </DropDownItem>
        </div>
      );
    }
    function FreeTours() {
      return (
        <ul className={styles.dropdown}>
          <li>
            <DropDownItem
              leftIcon={<IoMdArrowDropleft />}
              onClick={() => setActiveMenu("main")}
            ></DropDownItem>
          </li>

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
      );
    }
    function PrivateTours() {
      return (
        <ul className={styles.dropdown}>
          <li>
            <DropDownItem
              leftIcon={<IoMdArrowDropleft />}
              onClick={() => setActiveMenu("main")}
            ></DropDownItem>
          </li>

          {tours?.map((tour, i) => {
            if (!tour.type) {
              return (
                <li key={i}>
                  <a href={`tours/${tour.slug.current}`}>{tour.title}</a>{" "}
                </li>
              );
            }
          })}
        </ul>
      );
    }
    return (
      <>
        {activeMenu === "main" && <MainMenu />}
        {activeMenu === "freeTours" && <FreeTours />}
        {activeMenu === "privateTours" && <PrivateTours />}
      </>
    );
  }
  const [dropdown, setDropdown] = useState(false);
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
