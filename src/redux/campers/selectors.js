import { createSelector } from "@reduxjs/toolkit";
import { selectLocationFilter } from "../filters/selectors";

export const selectAllCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectLocationFilter],
  (campers, locationFilter) => {
    if (locationFilter.trim() === "") return campers;
    return campers.filter((camper_i) =>
      camper_i.location.toLowerCase().includes(locationFilter)
    );
  }
);
