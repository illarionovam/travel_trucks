import css from "./CamperItem.module.css";
import { useNavigate } from "react-router-dom";

const CamperItem = ({ data }) => {
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/catalog/${id}`, { replace: true });
  };

  return (
    <div className={css.camperItemContainer}>
      <div className={css.imageContainer}>
        <img src={data.gallery[0].thumb} />
      </div>
      <div className={css.camperItemInfoContainer}>
        <div className={css.header}>
          <div className={css.headerTitle}>
            {data.name}
            {data.price}
          </div>
          <div className={css.headerDetails}>
            {data.rating} ({data.reviews.length} Reviews)
            {data.location}
          </div>
          <div className={css.description}>{data.description}</div>
          <div className={css.features}></div>
          <button onClick={() => navigateToDetails(data.id)}>Show more</button>
        </div>
      </div>
    </div>
  );
};

export default CamperItem;
