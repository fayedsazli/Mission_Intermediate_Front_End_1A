import Navbar from "../layout/Navbar";
import HomeTopBanner from "../layout/HomeTopBanner";

const Home = () => {
  return (
    <div className="d-flex flex-column gap-3 mb-3 justify-content-center">
      <Navbar />
      <HomeTopBanner />
    </div>
  );
};

export default Home;
