import BannerText from "../common/BannerText";

const HomeTopBanner = () => {
  return (
    <div
      className="background-container d-flex align-items-center justify-content-center text-white mx-auto rounded"
      style={{
        backgroundImage: "url('/background-imgae.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "80%",
      }}>
      <div
        className="d-flex align-items-center justify-content-center w-100 h-100 rounded "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="position-relative text-center w-75">
            <BannerText />
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
