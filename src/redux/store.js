import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import reviewsReducer from "./reviews/slice";
import requestReducer from "./request/slice";
import themeReducer from "./theme/slice";

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

const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["themeName"],
};

const store = configureStore({
  reducer: {
    theme: persistReducer(themePersistConfig, themeReducer),
    reviews: reviewsReducer,
    request: requestReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
