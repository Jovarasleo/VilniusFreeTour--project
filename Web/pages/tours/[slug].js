import client from "../../client";
// import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import styles from "./index.module.css";
import { BsFillEyeFill } from "@react-icons/all-files/bs/BsFillEyeFill";
import { FaMapSigns } from "@react-icons/all-files/fa/FaMapSigns";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
// import { BsFillEyeFill } from "react-icons/bs";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Tour = ({ tour }) => {
  console.log(tour.page);
  const tourContent = tour.page;
  return (
    <>
      <div className={styles.singleTourThemeWrapper}>
        <div className={styles.singleTourWrapper}>
          <section className={styles.tour}>
            <FaMapSigns className={styles.icon} />
            <h4 className={styles.singleTourTitle}>{tourContent.title}</h4>
            <h6 className={styles.singleTourHTag}>{tourContent.hTag}</h6>
            <ul className={styles.list}>
              {tourContent.highLights.map((list, id) => {
                return <li key={id}>{list}</li>;
              })}
            </ul>
            <p>{tourContent.description}</p>
          </section>
          <section className={styles.gallery}>
            <div className={styles.innerGallery}>
              {tourContent.gallery?.slice(0, 4).map((galleryImg) => {
                return (
                  <div className={styles.imgContainer} key={galleryImg._key}>
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
              <p>{tourContent.galleryMsg}</p>
            </div>
          </section>
        </div>
      </div>
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
  };
}

export default Tour;
