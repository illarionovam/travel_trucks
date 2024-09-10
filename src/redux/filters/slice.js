import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    locationFilter: "",
    typeFilter: "",
    allFilters: {
      locationFilter: "",
      typeFilter: "",
    },
  },
  reducers: {
    changeLocationFilter(state, action) {
      state.locationFilter = action.payload.trim().toLowerCase();
    },
    changeTypeFilter(state, action) {
      state.typeFilter = action.payload;
    },
    applyFilters(state) {
      state.allFilters.locationFilter = state.locationFilter;
      state.allFilters.typeFilter = state.typeFilter;
    },
  },
});

export const { changeLocationFilter, changeTypeFilter, applyFilters } =
  filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
