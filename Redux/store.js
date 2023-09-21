import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
import { usersReducer } from "./Users/slice";
import { rootReducer } from "./Root/slice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const authConfig = {
  key: "auth",
  storage: AsyncStorage,
};
const usersConfig = {
  key: "users",
  storage: AsyncStorage,
};
const reducer = persistReducer(persistConfig, rootReducer);
const auth = persistReducer(authConfig, authReducer);
const users = persistReducer(usersConfig, usersReducer);

const store = configureStore({
  reducer: {
    reducer,
    auth,
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export default { store, persistor };
