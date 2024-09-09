import css from "./CamperItem.module.css";

const CamperItem = ({ data }) => {
  return (
    <div>
      {data.name}
      {data.price}
      <p>
        {data.rating} ({data.reviews.length} Reviews)
      </p>
      {data.location}
      <img src={data.gallery[0].thumb} />
      {data.description}
    </div>
  );
};

export default CamperItem;
