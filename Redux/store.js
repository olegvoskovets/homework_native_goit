import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Auth/slice";
import { usersReducer } from "./Users/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});
