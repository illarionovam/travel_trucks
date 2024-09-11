import css from "./CamperItem.module.css";
import { useNavigate } from "react-router-dom";
import sprite from "../../images/icons.svg";
import { truncateDescription } from "../../helpers/formattingHelper";
import FeatureItem from "../FeatureItem/FeatureItem";
import RatingLocation from "../RatingLocation/RatingLocation";

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
          <RatingLocation
            rating={data.rating}
            reviewsCount={data.reviews.length}
            location={data.location}
          />
        </div>
        <p className={css.description}>
          {truncateDescription(data.description)}
        </p>
        <div className={css.features}>
          <FeatureItem value="transmission" label={data.transmission} />
          <FeatureItem value="engine" label={data.engine} />
          {data.AC && <FeatureItem value="ac" label="AC" />}
          {data.bathroom && <FeatureItem value="bathroom" label="bathroom" />}
          {data.kitchen && <FeatureItem value="kitchen" label="kitchen" />}
          {data.TV && <FeatureItem value="tv" label="TV" />}
          {data.radio && <FeatureItem value="radio" label="radio" />}
          {data.refrigerator && (
            <FeatureItem value="refrigerator" label="refrigerator" />
          )}
          {data.microwave && (
            <FeatureItem value="microwave" label="microwave" />
          )}
          {data.gas && <FeatureItem value="gas" label="gas" />}
          {data.water && <FeatureItem value="water" label="water" />}
        </div>
        <button onClick={() => navigateToDetails(data.id)}>Show more</button>
      </div>
    </div>
  );
};

export default CamperItem;
