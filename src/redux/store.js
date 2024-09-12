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
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites", "booking"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(persistConfig, campersReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
