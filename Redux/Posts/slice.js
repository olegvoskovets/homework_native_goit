import { createSlice } from "@reduxjs/toolkit";
import { addPostThunk } from "./operations";

const initialState = {
  posts: [],
  isLoading: false,
  isError: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(addPostThunk.pending, pending)
      .addCase(addPostThunk.fulfilled, addPostFulfilled)
      .addCase(addPostThunk.rejected, rejected),
});

function addPostFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isError = null;
  state.posts = [...state.posts, payload];
}

function pending(state) {
  state.isLoading = true;
  state.isError = null;
}
function rejected(state) {
  state.isLoading = false;

  state.isError = true;
}

export const postsReducer = postsSlice.reducer;
