import Banner from "../components/banner";
import TourCard from "../components/tourCard";
const Index = () => {
  return (
    <>
      <Banner />
      <h1>Home page</h1>
      <div className="contentWrapper">
        <div className="cardsWrapper">
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </>
  );
};

export default Index;
