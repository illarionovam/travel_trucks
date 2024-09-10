import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLocationFilter } from "../../redux/filters/slice";
import {
  selectAllLocations,
  selectLocationFilter,
} from "../../redux/filters/selectors";
import css from "./LocationPicklist.module.css";
import sprite from "../../images/icons.svg";
import { formatLocation } from "../../helpers/formattingHelper";
import clsx from "clsx";

const LocationPicklist = () => {
  const dispatch = useDispatch();
  const options = [...new Set(useSelector(selectAllLocations))];
  const locationFilter = useSelector(selectLocationFilter);

  const handleChange = (evt) => {
    dispatch(changeLocationFilter(evt.target.value));
  };

  const buildSelectClass = () => {
    return clsx(css.selectBar, locationFilter === "" && css.defaultOption);
  };

  const buildIconClass = () => {
    return clsx(css.mapIcon, locationFilter === "" && css.defaultOption);
  };

  return (
    <div className={css.selectContainer}>
      <svg width="20" height="20" className={buildIconClass()}>
        <use href={`${sprite}#map`} />
      </svg>
      <select
        onChange={handleChange}
        className={buildSelectClass()}
        defaultValue=""
      >
        <option value="">City</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {formatLocation(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationPicklist;
