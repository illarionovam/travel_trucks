import css from "./CamperItem.module.css";
import { useNavigate } from "react-router-dom";
import sprite from "../../images/icons.svg";
import {
  formatLocation,
  truncateDescription,
} from "../../helpers/formattingHelper";

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
            <h2 className={css.headerTitleText}>{data.name}</h2>
            <div className={css.priceLikeContainer}>
              <p className={css.headerTitleText}>
                &#8364;{data.price.toFixed(2)}
              </p>
              <svg width="24" height="20">
                <use href={`${sprite}#heart`} />
              </svg>
            </div>
          </div>
          <div className={css.headerDetails}>
            <div className={css.ratingContainer}>
              <svg width="16" height="16">
                <use href={`${sprite}#star`} />
              </svg>
              <p>
                {data.rating}({data.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.locationContainer}>
              <svg width="16" height="16">
                <use href={`${sprite}#map`} />
              </svg>
              <p>{formatLocation(data.location)}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>
          {truncateDescription(data.description)}
        </p>
        <div className={css.features}></div>
        <button onClick={() => navigateToDetails(data.id)}>Show more</button>
      </div>
    </div>
  );
};

export default CamperItem;
