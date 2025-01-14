import { createSlice } from "@reduxjs/toolkit";
import { ShopsState } from '../types';
import { createShop, deleteShop, editShop, getShops } from './operations';

const shopsInitialState: ShopsState = {
  shops: [],
  shopsError: null,
  shopActivated: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState: shopsInitialState,
  reducers: {
    activateShopAction(state, action) {
      state.shopActivated = action.payload;
    },},
  extraReducers: (builder) => {
    builder.addCase(createShop.fulfilled, (state, action) => {
      state.shops = [...state.shops, action.payload];
      state.shopsError = null;
    });
    builder.addCase(editShop.fulfilled, (state, action) => {
      state.shops = [...state.shops.filter(({_id}) => _id !== action.payload._id), action.payload];
      state.shopsError = null;
    });
    builder.addCase(deleteShop.fulfilled, (state, action) => {
      state.shops = state.shops.filter(({_id}) => _id !== action.payload);
      state.shopsError = null;
      if (state.shopActivated?._id === action.payload) {
        state.shopActivated = state.shops.length > 0
          ? state.shops.filter(({ _id }) => _id !== action.payload)[0]
          : null;
      }
    });
    builder.addCase(getShops.fulfilled, (state, action) => {
      state.shops = action.payload;
      state.shopsError = null;
      if (!state.shopActivated) state.shopActivated = action.payload[0];
    });
    builder.addCase(createShop.rejected, (state, action) => {
      state.shopsError = action.payload;
    });
    builder.addCase(editShop.rejected, (state, action) => {
      state.shopsError = action.payload;
    });
    builder.addCase(deleteShop.rejected, (state, action) => {
      state.shopsError = action.payload;
    });
    builder.addCase(getShops.rejected, (state, action) => {
      state.shopsError = action.payload;
    });
  },
});

export const shopsReducer = shopsSlice.reducer;
export const { activateShopAction } = shopsSlice.actions;
