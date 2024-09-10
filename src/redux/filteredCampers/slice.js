import { createSlice } from "@reduxjs/toolkit";

const filteredCampersSlice = createSlice({
  name: "filteredCampers",
  initialState: {
    items: [],
  },
});

export const filteredCampersReducer = filteredCampersSlice.reducer;
