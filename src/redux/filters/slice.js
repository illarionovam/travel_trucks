import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    locationFilter: "",
    allFilters: {
      locationFilter: "",
    },
  },
  reducers: {
    changeLocationFilter(state, action) {
      state.locationFilter = action.payload.trim().toLowerCase();
    },
    applyFilters(state) {
      state.allFilters.locationFilter = state.locationFilter;
    },
  },
});

export const { changeLocationFilter, applyFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
