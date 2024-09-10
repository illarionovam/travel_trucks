import React from "react";
import css from "./LocationPicklist.module.css";
import sprite from "../../images/icons.svg";

const LocationPicklist = ({ callback }) => {
  const handleChange = (evt) => {
    callback(evt.target.value);
  };

  return (
    <div className={css.locationFilterContainer}>
      <svg width="20" height="20" className={css.mapIcon}>
        <use href={`${sprite}#map`} />
      </svg>
      <input
        onChange={handleChange}
        placeholder="City"
        className={css.filterInput}
      ></input>
    </div>
  );
};

export default LocationPicklist;
