import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { campersReducer } from "./campers/slice";
import { filtersReducer } from "./filters/slice";
import { filteredCampersReducer } from "./filteredCampers/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    filteredCampers: filteredCampersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
