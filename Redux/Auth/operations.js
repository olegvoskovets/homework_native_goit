import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LogOut,
  Login,
  Registration,
  loginDB,
  registerDB,
  updateUserProfile,
} from "../../servicesApi/Api";

export const loginThunk = createAsyncThunk("auth/login", Login);

export const loginFirebaseThunk = createAsyncThunk(
  "auth/loginFirebaseThunk",
  loginDB
);

export const logOutThunk = createAsyncThunk("auth/logOut", LogOut);

export const registrationThunk = createAsyncThunk(
  "auth/registration",
  Registration
);
export const registrationThunkFirebaseDb = createAsyncThunk(
  "auth/registartionFirebaseDb",
  async (body) => {
    const { email, password, displayName } = body;
    await registerDB({ email, password });
    return await updateUserProfile({ displayName });
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  "auth/updateUser",
  updateUserProfile
);
