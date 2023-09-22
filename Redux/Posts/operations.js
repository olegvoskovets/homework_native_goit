import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, deleteAllPosts, getPostId } from "../../servicesApi/Api";

export const addPostThunk = createAsyncThunk("post/addPost", addPost);

export const deleteAllPostsThunk = createAsyncThunk(
  "post/deleteAllPosts",
  deleteAllPosts
);

export const setPostIdThunk = createAsyncThunk("post/getPostId", getPostId);
