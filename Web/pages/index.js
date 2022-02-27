import Banner from "../components/banner";
import TourCard from "../components/tourCard";
import groq from "groq";
import { useRouter } from "next/router";
import client from "../client";
const Index = ({ post }) => {
  console.log(post[0]?.description[0].children[0].text);
  const router = useRouter();
  return (
    <>
      <Banner />
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
        </div>
      </section>
    </>
  );
};
export async function getServerSideProps(context) {
  const query = `*[_type == "tour-card"]`;
  const post = await client.fetch(query);
  console.log(post);
  return {
    props: {
      post,
    },
  };
}

export default Index;
