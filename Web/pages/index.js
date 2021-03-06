import Banner from "../components/banner";
import { useContext, useEffect } from "react";
import Link from "next/link";
import TourCard from "../components/tourCard";
import ImportantMsg from "../components/importantMsg";
import client from "../client";
import GMaps from "../components/googleMap";
import imageUrlBuilder from "@sanity/image-url";
import ToursContext from "../context/ToursContext";
import DynamicPageContext from "../context/DynamicPageContext";
function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}
const Index = ({ tours, banner, msg, meetingPoint, dynamicPage }) => {
  const { setTour } = useContext(ToursContext);
  const { setPage } = useContext(DynamicPageContext);
  const bannerItem = banner[0]?.bannerImage?.asset?._ref;
  const meetingPointImg = meetingPoint[0]?.meetingPointImage?.asset?._ref;
  useEffect(() => {
    setTour(tours);
    setPage(dynamicPage);
  }, [tours, dynamicPage]);
  return (
    <>
      <Banner background={bannerItem} />
      {msg.length ? (
        <ImportantMsg title={msg[0]?.title} children={msg[0]?.text} />
      ) : null}
      <h3 className="homePage--sectionTitle">
        Our Featured <span className="colored">Walking</span> Tours
      </h3>
      <div className="contentWrapper">
        <div className="cardsWrapper">
          {tours?.map((card) => {
            if (card.featured) {
              return (
                <Link
                  key={card.title}
                  href="/tours/[tours]"
                  as={`/tours/${card?.slug?.current}`}
                >
                  <a>
                    <TourCard
                      key={card?.title}
                      coverImg={card?.mainImage?.asset?._ref}
                      title={card?.title}
                      description={card?.description}
                    />
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <section className="meetingSection">
        <div className="contentWrapper">
          <h3 className="homePage--sectionTitle">
            Meeting <span className="colored">Point</span>
          </h3>
          <div className="meetingPoint">
            <div className="meetingPoint--picture">
              <img src={urlFor(meetingPointImg)} alt="" />
            </div>
            <GMaps />
          </div>
        </div>
      </section>
    </>
  );
};
export async function getStaticProps() {
  const query1 = `*[_type == "tour-card"]{title, description, mainImage, slug, type, featured, group}`;
  const query2 = `*[_type == "banner"]`;
  const query3 = `*[_type == "ImpMsg"]`;
  const query4 = `*[_type == "meetingPoint"]`;
  const query5 = `*[_type == "dynamic-page"]`;
  const tours = await client.fetch(query1);
  const banner = await client.fetch(query2);
  const msg = await client.fetch(query3);
  const meetingPoint = await client.fetch(query4);
  const dynamicPage = await client.fetch(query5);

  return {
    props: {
      tours,
      banner,
      msg,
      meetingPoint,
      dynamicPage,
    },
  };
}

export default Index;
