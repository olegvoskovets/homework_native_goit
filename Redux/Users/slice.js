import { createSlice } from "@reduxjs/toolkit";
import { addUserThunk } from "./operations";

import User1 from "../../assets/user1.jpg";
import User2 from "../../assets/user2.jpg";
import User3 from "../../assets/user3.jpg";
import User4 from "../../assets/user4.jpg";
import User5 from "../../assets/user5.jpg";

const initialState = {
  users: [
    {
      email: "lena@ukr.net",
      login: "Lena",
      password: 11111,
      url: User2,
    },
    {
      email: "kolya@ukr.net",
      login: "Kolya",
      password: 11111,
      url: User1,
    },
    {
      email: "pavel@ukr.net",
      login: "Pavel",
      password: 11111,
      url: User3,
    },
    {
      email: "dasha@ukr.net",
      login: "Dasha",
      password: 11111,
      url: User4,
    },
    {
      email: "polya@ukr.net",
      login: "Polya",
      password: 11111,
      url: User5,
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
