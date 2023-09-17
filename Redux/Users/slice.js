import { createSlice } from "@reduxjs/toolkit";
import { addUserThunk } from "./operations";

const initialState = {
  users: [
    {
      email: "lena@ukr.net",
      login: "Lena",
      password: 11111,
    },
    {
      email: "kolya@ukr.net",
      login: "Kolya",
      password: 11111,
    },
    {
      email: "pavel@ukr.net",
      login: "Pavel",
      password: 11111,
    },
    {
      email: "dasha@ukr.net",
      login: "Dasha",
      password: 11111,
    },
    {
      email: "polya@ukr.net",
      login: "Polya",
      password: 11111,
    },
  ],
  isLoading: false,
  isError: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(addUserThunk.pending, pending)
      .addCase(addUserThunk.fulfilled, addUserFulfilled)
      .addCase(addUserThunk.rejected, rejected),
});

function addUserFulfilled(state, { payload }) {
  console.log("addUserFulfilled", payload);
  state.isLoading = false;
  state.users = [...state.users, payload];
}

function pending(state) {
  state.isLoading = true;
  state.isError = null;
}
function rejected(state) {
  state.isLoading = false;
  state.currentUser = null;
  state.isError = true;
}

export const usersReducer = usersSlice.reducer;
