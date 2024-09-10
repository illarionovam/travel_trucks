import { createSelector } from "@reduxjs/toolkit";
import { selectAllCampers } from "../campers/selectors";

export const selectLocationFilter = (state) => state.filters.locationFilter;

export const selectAllLocations = createSelector(
  [selectAllCampers],
  (campers) => {
    return campers.map((camper_i) => camper_i.location);
  }
);
