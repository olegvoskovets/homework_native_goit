import { createSlice } from "@reduxjs/toolkit";
import { addCommentsThunk } from "./operations";

const initialState = {
  comments: [],
  isLoading: false,
  isError: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(addCommentsThunk.pending, pending)
      .addCase(addCommentsThunk.fulfilled, addCommentsFulfilled)
      .addCase(addCommentsThunk.rejected, rejected),
});

function addCommentsFulfilled(state, { payload }) {
  console.log("addCommentsFulfilled", payload);
  state.isLoading = false;
  state.isError = null;
  state.comments = [...state.comments, payload];
}

function pending(state) {
  state.isLoading = true;
  state.isError = null;
}
function rejected(state) {
  state.isLoading = false;
  state.isError = true;
}

export const commentsReducer = commentsSlice.reducer;
