import { createAsyncThunk } from "@reduxjs/toolkit";
import { addComments } from "../../servicesApi/Api";

export const addCommentsThunk = createAsyncThunk(
  "comments/addComments",
  addComments
);
