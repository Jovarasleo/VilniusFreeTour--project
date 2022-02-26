import styles from "./index.module.css";
function Banner() {
  return (
    <>
      <div className={styles.banner}>
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
