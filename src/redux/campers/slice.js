import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    currentPage: 1,
    currentPageAPI: 1,
    isLastPage: false,
    loading: false,
    error: null,
  },
  reducers: {
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
      if (action.payload === 1) {
        state.currentPageAPI = 1;
        state.items = [];
        state.isLastPage = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...action.payload.items];
        state.currentPageAPI = action.payload.currentPageAPI;
        state.isLastPage = action.payload.isLastPage;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { changeCurrentPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
