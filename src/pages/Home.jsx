import Navbar from "../layout/Navbar";
import BackgroundBanner from "../layout/HomeTopBanner";
import CardSection from "../layout/CardSection";
import BannerText from "../common/BannerText";
import BannerCTA from "../common/BannerCTA";
import Footer from "../layout/Footer";


const Home = ({ setPage }) => {
  return (
    <div className="d-flex flex-column gap-3 mb-3 justify-content-center">
      <Navbar setPage={setPage} />
      <BackgroundBanner img="background-imgae.jpeg">
        <BannerText />
      </BackgroundBanner>
      <CardSection />
      <BackgroundBanner img="background3.jpeg">
      <BannerCTA />
      </BackgroundBanner>
      <Footer />
    </div>
  );
};

export default Home;
