import css from "./FeatureItem.module.css";
import sprite from "../../images/icons.svg";
import { capitalizeString } from "../../helpers/formattingHelper";

const FeatureItem = ({ value, label }) => {
  return (
    <div className={css.featureItem}>
      <svg width="20" height="20">
        <use href={`${sprite}#${value}`} />
      </svg>
      <p>{capitalizeString(label)}</p>
    </div>
  );
};

export default FeatureItem;
