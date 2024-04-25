// store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer"; // Шлях до вашого rootReducer
import { REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], // Перелік редюсерів, які потрібно зберегти
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);
