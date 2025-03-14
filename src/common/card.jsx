import AvatarId from "./avatarId";
import RatingCard from "./RatingCard";

const Card = ({ title, image, avatarImg }) => {
  return (
    <div className="col">
      <div className="card p-2 d-flex flex-column flex-lg-row text-start justify-content-start">
        <div className="row g-0 w-100">
          {/* Bagian Gambar */}
          <div className="col-4 col-lg-12">
            <img
              src={`/card/${image}`}
              className="card-img-top img-fluid object-fit-cover"
              alt="gambar1"
            />
          </div>

          {/* Bagian Konten */}
          <div className="col-8 col-lg-12 p-3">
            <h5 className="card-title fs-6">{title}</h5>
            <p className="card-text fs-6 text-secondary d-none d-lg-block">
              Mulai transformasi dengan instruktur profesional, harga yang
              terjangkau, dan kurikulum terbaik
            </p>
            <AvatarId avatarImg={avatarImg} />
          </div>
            <RatingCard />
        </div>
      </div>
    </div>
  );
};

export default Card;
