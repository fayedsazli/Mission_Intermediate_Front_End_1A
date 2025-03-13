import Navbar from "../layout/Navbar";
import BackgroundBanner from "../layout/HomeTopBanner";
import CardSection from "../layout/CardSection";
import BannerText from "../common/BannerText";
import BannerCTA from "../common/BannerCTA";


const Home = () => {
  return (
    <div className="d-flex flex-column gap-3 mb-3 justify-content-center">
      <Navbar />
      <BackgroundBanner img="background-imgae.jpeg">
        <BannerText />
      </BackgroundBanner>
      <CardSection />
      <BackgroundBanner img="background2.jpeg">
      <BannerCTA />
      </BackgroundBanner>
    </div>
  );
};

export default Home;
