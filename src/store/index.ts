import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Slices } from "./configureStore";

const persistConfig = {
  key: "rpgBoardAssistant",
  storage,
  whitelist: ["player"],
};
const persistedReducers = persistReducer(persistConfig, Slices);

export const store = configureStore({
  reducer: persistedReducers,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(createDebugger()) // Uncomment if needed
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
