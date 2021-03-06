import logo from "./logo.png";
import Image from "next/image";
import NavDesktop from "../navDesktop";
import NavMobile from "../navMobile";
import Hamburger from "../hamburger";
import { useState, useCallback, useEffect, useContext, useRef } from "react";
import Link from "next/dist/client/link";
import styles from "./index.module.css";
import client from "../../client.js";
import TourContext from "../../context/ToursContext";
import DynamicPageContext from "../../context/DynamicPageContext";
import { CSSTransition } from "react-transition-group";
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
  const { page } = useContext(DynamicPageContext);
  const { tour } = useContext(TourContext);
  const [toggle, setToggle] = useState(false);
  const isBreakpoint = useMediaQuery(768);

  useEffect(() => {
    if (!isBreakpoint) {
      setToggle(false);
    }
  }, [isBreakpoint]);
  return (
    <div className={styles.outterNavWrapper}>
      <div className={styles.nav}>
        <div className={styles.navWrapper}>
          <Link href="/">
            <a>
              <Image src={logo} alt="me" width="94" height="72" />
            </a>
          </Link>
          {isBreakpoint ? (
            <Hamburger onClick={() => setToggle(!toggle)} toggle={toggle} />
          ) : (
            <NavDesktop
              toggle={toggle}
              setToggle={setToggle}
              tours={tour}
              pages={page}
            />
          )}
        </div>
        <div>
          <CSSTransition
            in={toggle}
            timeout={500}
            unmountOnExit
            classNames={{
              enter: styles.MobileMenuEnter,
              enterActive: styles.MobileMenuActive,
              exit: styles.MobileMenuExit,
              exitActive: styles.MobileMenuExitActive,
            }}
          >
            <NavMobile
              toggle={toggle}
              setToggle={setToggle}
              tours={tour}
              pages={page}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const query1 = `*[_type == "tour-card"]`;
  const query2 = `*[_type == "dynamic-page"]`;
  const tours = await client.fetch(query1);
  const dynamicPage = await client.fetch(query2);
  return {
    props: {
      tours,
      dynamicPage,
    },
  };
}

export default Header;
