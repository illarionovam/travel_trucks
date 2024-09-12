import css from "./RatingBar.module.css";
import sprite from "../../images/icons.svg";

const RatingBar = ({ rating }) => {
  return (
    <ul className={css.ratingBarContainer}>
      {[1, 2, 3, 4, 5].map((star_i) => (
        <li key={star_i}>
          <svg
            width="16"
            height="16"
            className={
              rating >= star_i ? css.starColorYellow : css.starColorGray
            }
          >
            <use href={`${sprite}#star`} />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default RatingBar;
