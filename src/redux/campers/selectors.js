import { createSelector } from "@reduxjs/toolkit";
import { selectAllFilters } from "../filters/selectors";

export const selectAllCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectAllFilters],
  (campers, allFilters) => {
    const filteredCampers = [];
    for (let i = 0; i < campers.length; i++) {
      let shouldBeShown = true;

      if (
        allFilters.locationFilter !== "" &&
        !campers[i].location.toLowerCase().includes(allFilters.locationFilter)
      ) {
        shouldBeShown = false;
      }

      if (
        allFilters.typeFilter !== "" &&
        campers[i].form !== allFilters.typeFilter
      ) {
        shouldBeShown = false;
      }

      if (allFilters.equipmentFilter.length !== 0) {
        if (allFilters.equipmentFilter.includes("ac") && !campers[i].AC) {
          shouldBeShown = false;
        }
        if (
          allFilters.equipmentFilter.includes("transmission") &&
          campers[i].transmission !== "automatic"
        ) {
          shouldBeShown = false;
        }
        if (
          allFilters.equipmentFilter.includes("kitchen") &&
          !campers[i].kitchen
        ) {
          shouldBeShown = false;
        }
        if (allFilters.equipmentFilter.includes("tv") && !campers[i].TV) {
          shouldBeShown = false;
        }
        if (
          allFilters.equipmentFilter.includes("bathroom") &&
          !campers[i].bathroom
        ) {
          shouldBeShown = false;
        }
      }

      if (shouldBeShown) filteredCampers.push(campers[i]);
    }

    return filteredCampers;
  }
);
