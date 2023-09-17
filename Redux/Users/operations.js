import { createAsyncThunk } from "@reduxjs/toolkit";
import { addUser } from "../../servicesApi/Api";

export const addUserThunk = createAsyncThunk("users/addUser", addUser);
