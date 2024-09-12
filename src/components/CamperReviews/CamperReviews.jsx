import css from "./CamperReviews.module.css";
import RatingBar from "../RatingBar/RatingBar";

const CamperReviews = ({ reviews }) => {
  return (
    <ul className={css.reviewsContainer}>
      {reviews.map((review_i, index) => (
        <li key={index}>
          <div className={css.singleReviewContainer}>
            <div className={css.reviewHeader}>
              <div className={css.iconDiv}>
                <p>{review_i.reviewer_name.slice(0, 1)}</p>
              </div>
              <div className={css.nameDiv}>
                <p>{review_i.reviewer_name}</p>
                <RatingBar rating={review_i.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{review_i.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperReviews;
