import logo from "./logo.png";
import Image from "next/image";
import NavDesktop from "../navDesktop";
import NavMobile from "../navMobile";
import Hamburger from "../hamburger";
import { useState, useCallback, useEffect, useContext } from "react";
import Link from "next/dist/client/link";
import styles from "./index.module.css";
import client from "../../client.js";
import TourContext from "../../context/ToursContext";

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
  const { tour } = useContext(TourContext);
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
        <Link href="/">
          <a>
            <Image src={logo} alt="me" width="94" height="72" />
          </a>
        </Link>
        {isBreakpoint !== "undefined" ? (
          isBreakpoint ? (
            <Hamburger onClick={() => setToggle(!toggle)} toggle={toggle} />
          ) : (
            <NavDesktop />
          )
        ) : null}
      </div>
      {toggle && (
        <NavMobile toggle={toggle} setToggle={setToggle} tours={tour} />
      )}
    </div>
  );
}
export async function getStaticProps() {
  const query1 = `*[_type == "tour-card"]`;
  const tours = await client.fetch(query1);
  console.log(tours);
  return {
    props: {
      tours,
    },
  };
}

export default Header;
