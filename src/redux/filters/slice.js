import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    locationFilter: "",
  },
  reducers: {
    changeLocationFilter(state, action) {
      state.locationFilter = action.payload.trim().toLowerCase();
    },
  },
});

export const { changeLocationFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
