import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshUser, registerUser } from "./operations";
import { AuthState } from '../types';

const authInitialState: AuthState = {
  name: null,
  email: null,
  phone: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.phone = action.payload.user.phone;
      state.token = action.payload.user.token;
      state.isLoggedIn = true;
      state.authError = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.phone = action.payload.user.phone;
      state.token = action.payload.user.token;
      state.isLoggedIn = true;
      state.authError = null;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.name = null;
      state.email = null;
      state.phone = null;
      state.token = null;
      state.isLoggedIn = false;
      state.authError = null;
    });
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.phone = action.payload.user.phone;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.authError = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.authError = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
