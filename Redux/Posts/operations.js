import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPost } from "../../servicesApi/Api";

export const addPostThunk = createAsyncThunk("post/addPost", addPost);
