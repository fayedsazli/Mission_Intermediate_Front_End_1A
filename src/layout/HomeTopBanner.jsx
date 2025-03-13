import BannerText from "../common/BannerText";

const BackgroundBanner = ({img,children}) => {
  return (
    <div
      className="background-container d-flex align-items-center justify-content-center text-white mx-auto rounded"
      style={{
        backgroundImage: `url("/${img}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "80%",
      }}>
      <div
        className="d-flex align-items-center justify-content-center w-100 h-100 rounded "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="position-relative text-center w-75">
            {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundBanner;
