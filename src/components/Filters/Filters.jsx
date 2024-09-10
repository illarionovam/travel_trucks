import React from "react";
import css from "./Filters.module.css";
import sprite from "../../images/icons.svg";

const Filters = ({ title, filters }) => {
  const titleToIcon = {
    AC: "ac",
    Automatic: "transmission",
    Kitchen: "kitchen",
    TV: "tv",
    Bathroom: "bathroom",
    Van: "van",
    "Fully Integrated": "fullIntegrated",
    Alcove: "alcove",
  };

  return (
    <div className={css.filtersContainer}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.separatorLine}></div>
      <ul className={css.filters}>
        {filters.map((filter, index) => (
          <li key={index}>
            <button className={css.filterItem}>
              <svg width="32" height="32">
                <use href={`${sprite}#${titleToIcon[filter]}`} />
              </svg>
              <p className={css.filterItemTitle}>{filter}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
