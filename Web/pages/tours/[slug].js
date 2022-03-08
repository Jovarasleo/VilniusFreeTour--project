import { useEffect, useState } from "react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./index.module.css";
import { BsFillEyeFill } from "@react-icons/all-files/bs/BsFillEyeFill";
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { ImArrowRight } from "@react-icons/all-files/im/ImArrowRight";
import { ImArrowLeft } from "@react-icons/all-files/im/ImArrowLeft";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Tour = ({ tour }) => {
  const [gallery, toggleGallery] = useState(false);
  const [imgId, setImgId] = useState("");
  const openGallery = (id) => {
    toggleGallery(!gallery);
    setImgId(id);
  };
  const tourContent = tour?.page;
  const galleryArray = tourContent?.gallery;
  const imgForwards = (e) => {
    e.stopPropagation();
    galleryArray?.map((item, index) => {
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
  useEffect(() => {
    if (typeof window != "undefined" && window.document) {
      if (gallery) {
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "";
    }
  });
  const GalleryApp = ({ id }) => {
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
            <ImArrowLeft
              className={styles.arrowLeft.concat(" ", styles.arrow)}
            />
          </button>

          {tourContent?.gallery?.map((imgFile) => {
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
  return (
    <>
      {tourContent ? (
        <div className={styles.singleTourThemeWrapper}>
          <div className={styles.singleTourWrapper}>
            <section className={styles.tour}>
              <FaMapSigns className={styles.icon} />
              <h4 className={styles.singleTourTitle}>{tourContent?.title}</h4>
              <h6 className={styles.singleTourHTag}>{tourContent?.hTag}</h6>
              <ul className={styles.list}>
                {tourContent?.highLights?.map((list, id) => {
                  return <li key={id}>{list}</li>;
                })}
              </ul>
              <p>{tourContent?.description}</p>
            </section>
            <section className={styles.gallery}>
              <div className={styles.innerGallery}>
                {tourContent?.gallery?.slice(0, 4).map((galleryImg) => {
                  return (
                    <div
                      className={styles.imgContainer}
                      key={galleryImg._key}
                      onClick={() => openGallery(galleryImg._key)}
                    >
                      <img src={urlFor(galleryImg).format("webp")} />
                      <div className={styles.imgOverlay}>
                        <BsFillEyeFill className={styles.eyeIcon} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.galleryMessage}>
                <div className={styles.iconWrapper}>
                  <FaThumbsUp className={styles.thumbsUpIcon} />
                </div>
                <p>{tourContent?.galleryMsg}</p>
              </div>
            </section>
          </div>
          {gallery ? <GalleryApp id={imgId} /> : null}
        </div>
      ) : null}
    </>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "tour-card" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const tour = await client.fetch(
    `
    *[_type == "tour-card" && slug.current == $slug][0]{page}
  `,
    { slug }
  );
  return {
    props: {
      tour,
    },
    revalidate: 5,
  };
}

export default Tour;
