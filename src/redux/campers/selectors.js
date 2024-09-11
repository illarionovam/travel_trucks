export const selectFilteredCampers = (state) =>
  state.campers.items.slice(0, 4 * state.campers.currentPage);
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectIsLastPage = (state) => state.campers.isLastPage;
export const selectCurrentCamper = (state) => state.campers.currentCamper;
export const selectFavorites = (state) => state.campers.favorites;
