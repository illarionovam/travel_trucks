import { createSelector } from "@reduxjs/toolkit";
import { selectAllCampers } from "../campers/selectors";
import { selectLocationFilter } from "../filters/selectors";

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectLocationFilter],
  (campers, locationFilter) => {
    if (locationFilter.trim() === "") return campers;
    return campers.filter((camper_i) => camper_i.location === locationFilter);
  }
);
