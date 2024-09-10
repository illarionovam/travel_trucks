import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    locationFilter: "",
    typeFilter: "",
    equipmentFilter: [],
    allFilters: {
      locationFilter: "",
      typeFilter: "",
      equipmentFilter: [],
    },
  },
  reducers: {
    changeLocationFilter(state, action) {
      state.locationFilter = action.payload.trim().toLowerCase();
    },
    changeTypeFilter(state, action) {
      state.typeFilter = action.payload;
    },
    changeEquipmentFilter(state, action) {
      state.equipmentFilter = action.payload;
    },
    applyFilters(state) {
      state.allFilters.locationFilter = state.locationFilter;
      state.allFilters.typeFilter = state.typeFilter;
      state.allFilters.equipmentFilter = state.equipmentFilter;
    },
  },
});

export const {
  changeLocationFilter,
  changeTypeFilter,
  changeEquipmentFilter,
  applyFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
