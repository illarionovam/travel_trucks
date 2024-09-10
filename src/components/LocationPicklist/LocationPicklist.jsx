import { useState } from "react";
import css from "./LocationPicklist.module.css";
import sprite from "../../images/icons.svg";
import clsx from "clsx";

const LocationPicklist = ({ callback }) => {
  const [inputIsEmpty, setInputIsEmpty] = useState(true);

  const buildIconClass = () => {
    return clsx(css.mapIcon, inputIsEmpty && css.defaultOption);
  };

  const handleChange = (evt) => {
    const value = evt.target.value.trim();
    setInputIsEmpty(value === "");
    callback(value);
  };

  return (
    <div className={css.locationFilterContainer}>
      <svg width="20" height="20" className={buildIconClass()}>
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
