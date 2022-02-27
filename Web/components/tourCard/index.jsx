import styles from "./index.module.css";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
function tourCard({ title, description, coverImg, imgAlt, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardPinch}></div>
      <div className={styles.cardOverlay}>
        <h6 className={styles.contentDetails}>Read more!</h6>
      </div>
      <img
        src={urlFor(coverImg).width(320).height(200).fit("max").auto("format")}
        alt={imgAlt}
      />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
export default tourCard;
