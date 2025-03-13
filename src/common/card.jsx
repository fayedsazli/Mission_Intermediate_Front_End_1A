import AvatarId from "./avatarId";
import RatingCard from "./RatingCard";

const Card = ({ title ,image,avatarImg}) => {
  return (
    <div className="col">
      <div className="card w-100 p-2">
        <img
          src={`/card/${image}`}
          className="card-img-top w-100"
          alt="gambar1"
        />
        <div className="card-body text-start ">
          <h5 className="card-title fs-6">{title}</h5>
          <p className="card-text fs-6 text-secondary">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik{" "}
          </p>
          <AvatarId avatarImg={avatarImg}/>
          <RatingCard />
        </div>
      </div>
    </div>
  );
};

export default Card;
