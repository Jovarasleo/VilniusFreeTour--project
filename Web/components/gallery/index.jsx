import { useEffect, useState } from "react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

import { ImArrowRight } from "@react-icons/all-files/im/ImArrowRight";
import { ImArrowLeft } from "@react-icons/all-files/im/ImArrowLeft";
import styles from "./index.module.css";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const GalleryApp = ({
  id,
  galleryArray,
  setImgId,
  imgId,
  gallery,
  toggleGallery,
}) => {
  const imgForwards = (e) => {
    e.stopPropagation();
    galleryArray.map((item, index) => {
      let newIndex = index;
      if (item._key === imgId) {
        if (index === galleryArray.length - 1) {
          newIndex = -1;
        }
        setImgId(galleryArray[newIndex + 1]?._key);
      }
    });
  };
  const imgBackwards = (e) => {
    e.stopPropagation();
    galleryArray?.map((item, index) => {
      let newIndex = index;
      if (item._key === imgId) {
        if (index === 0) {
          newIndex = galleryArray.length;
        }
        setImgId(galleryArray[newIndex - 1]?._key);
      }
    });
  };
  return (
    <div
      className={styles.galleryImgBig}
      onClick={() => toggleGallery(!gallery)}
    >
      <div className={styles.galleryImgWrapper}>
        <button
          className={styles.goBackwards.concat(" ", styles.arrowWrapper)}
          onClick={(e) => imgBackwards(e)}
        >
          <ImArrowLeft className={styles.arrowLeft.concat(" ", styles.arrow)} />
        </button>

        {galleryArray?.map((imgFile) => {
          if (imgFile._key === id) {
            return (
              <img
                key={imgFile._key}
                src={urlFor(imgFile).format("webp")}
                onClick={(e) => e.stopPropagation()}
              />
            );
          }
        })}
        <button
          className={styles.goForward.concat(" ", styles.arrowWrapper)}
          onClick={(e) => imgForwards(e)}
        >
          <ImArrowRight
            className={styles.arrowRight.concat(" ", styles.arrow)}
          />
        </button>
      </div>
    </div>
  );
};
export default GalleryApp;
