import Banner from "../components/banner";
import Link from "next/link";
import TourCard from "../components/tourCard";
import ImportantMsg from "../components/importantMsg";
import client from "../client";
const Index = ({ tours, banner, msg }) => {
  const bannerItem = banner[0]?.bannerImage?.asset?._ref;
  return (
    <>
      <Banner background={bannerItem} />
      {msg.length ? (
        <ImportantMsg title={msg[0]?.title} children={msg[0]?.text} />
      ) : null}
      <h3 className="homePage--sectionTitle">
        Walking <span className="colored">Tours</span> We Offer
      </h3>
      <div className="contentWrapper">
        <div className="cardsWrapper">
          {tours?.map((card) => {
            return (
              <Link
                key={card.title}
                href="/tours/[tours]"
                as={`/tours/${card?.slug?.current}`}
              >
                <a>
                  <TourCard
                    key={card.title}
                    coverImg={card.mainImage?.asset?._ref}
                    title={card.title}
                    description={card.description[0].children[0].text}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <section className="meetingSection">
        <div className="contentWrapper">
          <h3 className="homePage--sectionTitle">
            Meeting <span className="colored">Point</span>
          </h3>
          <div className="meetingPoint">
            <div className="meetingPoint--picture"></div>
            <div className="meetingPoint--map"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export async function getStaticProps() {
  const query1 = `*[_type == "tour-card"]`;
  const query2 = `*[_type == "banner"]`;
  const query3 = `*[_type == "ImpMsg"]`;
  const tours = await client.fetch(query1);
  const banner = await client.fetch(query2);
  const msg = await client.fetch(query3);
  return {
    props: {
      tours,
      banner,
      msg,
    },
  };
}

export default Index;
