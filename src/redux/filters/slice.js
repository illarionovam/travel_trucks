import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    locationFilter: "",
  },
  reducers: {
    changeLocationFilter(state, action) {
      state.locationFilter = action.payload.toLowerCase();
    },
  },
});

export const { changeLocationFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
