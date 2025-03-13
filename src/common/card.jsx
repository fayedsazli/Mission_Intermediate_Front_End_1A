const Card = () => {
  return (
    <div className="col">
      <div className="card w-100 p-2" >
        <img src="/Rectangle1.png" className="card-img-top w-100" alt="gambar1" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
