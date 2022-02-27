import styles from "./index.module.css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
function Banner({ background }) {
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlFor(
            background
          )})`,
        }}
      >
        <h1 className={styles.bannerText}>
          <span>VILNIUS </span>
          <span className={styles.extra}>FREE </span>
          <span>WALKING </span>
          <span className={styles.extra2}>TOURS</span>
        </h1>
      </div>
    </>
  );
}
export default Banner;
