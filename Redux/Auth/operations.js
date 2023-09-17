import { createAsyncThunk } from "@reduxjs/toolkit";
import { LogOut, Login, Registration } from "../../servicesApi/Api";

export const loginThunk = createAsyncThunk("users/login", Login);

export const logOutThunk = createAsyncThunk("users/logOut", LogOut);
export const registrationThunk = createAsyncThunk(
  "users/registration",
  Registration
);
