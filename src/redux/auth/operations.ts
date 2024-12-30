import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { clearAuthHeader, setAuthHeader } from "../axios";

import { RootState } from "../store";
import { handleError } from "../helpers";
import { AuthResponse, ErrorResponse, LogoutResponse, UserData } from '../types';

export const registerUser = createAsyncThunk<
  AuthResponse,
  UserData,
  { rejectValue: ErrorResponse }
>("auth/register", async (userInfo: UserData, thunkAPI) => {
  try {
    const response = await axios.post<AuthResponse>("/user/register", userInfo);
    setAuthHeader(response.data.user.token);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const loginUser = createAsyncThunk<
  AuthResponse,
  UserData,
  { rejectValue: ErrorResponse }
>("auth/login", async (userInfo: UserData, thunkAPI) => {
  try {
    const response = await axios.post<AuthResponse>("/user/login", userInfo);
    setAuthHeader(response.data.user.token);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const refreshUser = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: ErrorResponse }
>("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue({ message: "Unable to fetch user" });
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get<AuthResponse>("/user/user-info");
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const logoutUser = createAsyncThunk<
  LogoutResponse,
  void,
  { rejectValue: ErrorResponse }
>("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post<LogoutResponse>("/user/logout");
    clearAuthHeader();
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});
