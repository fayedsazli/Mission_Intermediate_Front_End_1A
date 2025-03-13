import Card from "../common/card";

const CardGroup = () => {
  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-gap-2">
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </div>
  );
};

export default CardGroup;
