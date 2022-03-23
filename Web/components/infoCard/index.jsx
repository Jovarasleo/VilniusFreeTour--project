import styles from "./index.module.css";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import { BsCreditCard } from "@react-icons/all-files/bs/BsCreditCard";
import { BsClockHistory } from "@react-icons/all-files/bs/BsClockHistory";
import { VscLocation } from "@react-icons/all-files/vsc/VscLocation";
import { BsPencilSquare } from "react-icons/bs";

import Calendar from "react-calendar";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
function InfoCard({
  title,
  textbox,
  children,
  iconColor,
  img,
  selectCardType,
}) {
  function icon(selectType) {
    switch (selectType) {
      case "location":
        return <VscLocation />;
      case "time":
        return <BsClockHistory />;
      case "price":
        return <BsCreditCard />;
      case "booking":
        return <BsPencilSquare />;
      default:
        return <BsCreditCard />;
    }
  }
  return (
    <div className={styles.infoCard}>
      <div className={styles.icon} style={{ backgroundColor: iconColor }}>
        {icon(selectCardType)}
      </div>
      <h4>{title}</h4>

      {img ? (
        <div className={styles.imageWrapper}>
          <img src={urlFor(img.asset).format("webp")} />
        </div>
      ) : null}
      <p>{textbox}</p>
      {selectCardType === "booking" ? (
        <div className={styles.calendarWrapper}>{<Calendar />}</div>
      ) : null}
    </div>
  );
}
export default InfoCard;
