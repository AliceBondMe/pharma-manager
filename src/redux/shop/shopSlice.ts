import { createSlice } from "@reduxjs/toolkit";
import { ShopsState } from '../types';
import { createShop } from './operations';

const shopsInitialState: ShopsState = {
  shops: [],
  shopsError: null,
  createdShop: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState: shopsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createShop.fulfilled, (state, action) => {
      state.createdShop = action.payload;
      state.shopsError = null;
    });
    builder.addCase(createShop.rejected, (state, action) => {
      state.shopsError = action.payload;
    });
  },
});

export const shopsReducer = shopsSlice.reducer;
