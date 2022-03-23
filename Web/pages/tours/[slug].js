import { useContext, useEffect, useState } from "react";
import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import { BsEye } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsSignpostSplit } from "react-icons/bs";
import InfoCard from "../../components/infoCard";
import ToursContext from "../../context/ToursContext";
import GalleryApp from "../../components/gallery";
import styles from "./index.module.css";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Tour = ({ tour, tours }) => {
  const { setTour } = useContext(ToursContext);
  const [gallery, toggleGallery] = useState(false);
  const [imgId, setImgId] = useState("");
  const tourContent = tour?.page;
  const galleryArray = tourContent?.gallery;
  const openGallery = (id) => {
    toggleGallery(!gallery);
    setImgId(id);
  };
  useEffect(() => {
    setTour(tours);
    if (typeof window != "undefined" && window.document) {
      if (gallery) {
        document.body.style.overflow = "hidden";
      } else document.body.style.overflow = "";
    }
  }, [tours, gallery]);
  return (
    <>
      {tourContent ? (
        <div className={styles.singleTourThemeWrapper}>
          <div className={styles.singleTourWrapper}>
            <section className={styles.tour}>
              <div className={styles.signPostIcon}>
                <BsSignpostSplit className={styles.icon} />
              </div>
              <h4 className={styles.singleTourTitle}>{tourContent?.title}</h4>
              <h6 className={styles.singleTourHTag}>{tourContent?.hTag}</h6>
              <ul className={styles.list}>
                {tourContent?.highLights?.map((list, id) => {
                  return (
                    <li key={id}>
                      <span>{list}</span>
                    </li>
                  );
                })}
              </ul>
              <p className={styles.description}>{tourContent?.description}</p>
            </section>
            {tourContent.infoSection ? (
              <section className={styles.infoCards}>
                {tourContent?.infoSection?.map((card, index) => {
                  return (
                    <InfoCard
                      key={index}
                      title={card.Title}
                      textbox={card.Textbox}
                      selectCardType={card.selectCardType}
                      img={card?.image}
                    ></InfoCard>
                  );
                })}
                <div className={styles.galleryMessage}>
                  <div className={styles.iconWrapper}>
                    <FaRegThumbsUp className={styles.thumbsUpIcon} />
                  </div>
                  <h4>{tourContent?.galleryTitle}</h4>
                  <p>{tourContent?.galleryMsg}</p>
                </div>
              </section>
            ) : null}

            <section className={styles.gallery}>
              <div className={styles.innerGallery}>
                {tourContent?.gallery?.slice(0, 3).map((galleryImg) => {
                  return (
                    <div
                      className={styles.imgContainer}
                      key={galleryImg._key}
                      onClick={() => openGallery(galleryImg._key)}
                    >
                      <img src={urlFor(galleryImg).format("webp")} />
                      <div className={styles.imgOverlay}>
                        <BsEye className={styles.eyeIcon} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
          {gallery ? (
            <GalleryApp
              id={imgId}
              setImgId={setImgId}
              imgId={imgId}
              galleryArray={galleryArray}
              gallery={gallery}
              toggleGallery={toggleGallery}
            />
          ) : null}
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
  const query1 = `*[_type == "tour-card"]{title, slug, type, featured}`;
  const tours = await client.fetch(query1);
  const tour = await client.fetch(
    `
    *[_type == "tour-card" && slug.current == $slug][0]{page}
  `,
    { slug }
  );
  return {
    props: {
      tour,
      tours,
    },
    revalidate: 5,
  };
}

export default Tour;
