import Navbar from "../layout/Navbar";
import BackgroundBanner from "../layout/HomeTopBanner";
import CardSection from "../layout/CardSection";
import BannerText from "../common/BannerText";
import BannerCTA from "../common/BannerCTA";
import Footer from "../layout/Footer";

const Home = ({ setPage }) => {
  return (
    <>
          <Navbar setPage={setPage} />
    <div className="body d-flex flex-column align-items-center text-center gap-3 mb-3 px-4 py-5">
      <BackgroundBanner img="background-imgae.jpeg">
        <BannerText />
      </BackgroundBanner>
      <CardSection />
      <BackgroundBanner img="background3.jpeg">
      <BannerCTA />
      </BackgroundBanner>
    </div>
    <Footer />
    </>
  );
};

export default Home;
