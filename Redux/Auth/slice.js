import { createSlice } from "@reduxjs/toolkit";
import { logOutThunk, loginThunk, registrationThunk } from "./operations";

const initialState = {
  currentUser: null,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(loginThunk.pending, pending)
      .addCase(loginThunk.fulfilled, loginFulfilled)
      .addCase(loginThunk.rejected, rejected)

      .addCase(logOutThunk.pending, pending)
      .addCase(logOutThunk.fulfilled, logOutFulfilled)
      .addCase(logOutThunk.rejected, rejected)

      .addCase(registrationThunk.pending, pending)
      .addCase(registrationThunk.fulfilled, registrationFulfilled)
      .addCase(registrationThunk.rejected, rejected),
});

function loginFulfilled(state, { payload }) {
  console.log("login payload ", payload);
  state.isLoading = false;
  state.currentUser = payload;
  state.isError = null;
}

function logOutFulfilled(state, { payload }) {
  state.isLoading = false;
  state.currentUser = payload;
  state.isError = null;
}
function registrationFulfilled(state, { payload }) {
  console.log("registration payload ", payload);
  state.isLoading = false;
  state.currentUser = payload;
  state.isError = null;
}

function pending(state) {
  state.isLoading = true;
}
function rejected(state) {
  state.isLoading = false;
  state.currentUser = null;
  state.isError = true;
}

export const authReducer = authSlice.reducer;
