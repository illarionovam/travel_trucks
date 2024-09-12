import css from "./FeatureItem.module.css";
import sprite from "../../images/icons.svg";
import { capitalizeString } from "../../helpers/formattingHelper";
import clsx from "clsx";

const buildDivClass = (adjustColor) => {
  return clsx(css.featureItem, adjustColor && css.adjustedColor);
};

const FeatureItem = ({ value, label, adjustColor }) => {
  return (
    <div className={buildDivClass(adjustColor)}>
      <svg width="20" height="20">
        <use href={`${sprite}#${value}`} />
      </svg>
      <p>{capitalizeString(label)}</p>
    </div>
  );
};

export default FeatureItem;
