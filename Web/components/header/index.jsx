import logo from "../../images/logo.png";
import Image from "next/image";
import NavDesktop from "../navDesktop";
import NavMobile from "../navMobile";
import Hamburger from "../hamburger";
import { useState, useCallback, useEffect } from "react";
import styles from "./index.module.css";
const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function Header() {
  const [toggle, setToggle] = useState(false);
  const isBreakpoint = useMediaQuery(768);
  useEffect(() => {
    if (!isBreakpoint) {
      setToggle(false);
    }
  });
  return (
    <div className={styles.nav}>
      <div className={styles.navWrapper}>
        <Image src={logo} alt="me" width="126" height="96" />
        {isBreakpoint ? (
          <Hamburger onClick={() => setToggle(!toggle)} />
        ) : (
          <NavDesktop />
        )}
      </div>
      {toggle && <NavMobile />}
    </div>
  );
}
export default Header;
