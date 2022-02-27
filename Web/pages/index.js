import Banner from "../components/banner";
import TourCard from "../components/tourCard";
import ImportantMsg from "../components/importantMsg";
import groq from "groq";
import { useRouter } from "next/router";
import client from "../client";
const Index = ({ post, banner, msg }) => {
  const bannerItem = banner[0]?.bannerImage?.asset?._ref;
  const router = useRouter();
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
          {post?.map((card) => {
            return (
              <TourCard
                key={card.title}
                onClick={() => router.push(`/tours/${card.slug.current}`)}
                coverImg={card.mainImage?.asset?._ref}
                title={card.title}
                description={card.description[0].children[0].text}
              />
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
export async function getServerSideProps(context) {
  const query1 = `*[_type == "tour-card"]`;
  const query2 = `*[_type == "banner"]`;
  const query3 = `*[_type == "ImpMsg"]`;
  const post = await client.fetch(query1);
  const banner = await client.fetch(query2);
  const msg = await client.fetch(query3);
  return {
    props: {
      post,
      banner,
      msg,
    },
  };
}

export default Index;
