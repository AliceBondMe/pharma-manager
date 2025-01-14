import { createSelector } from '@reduxjs/toolkit';
import { RootState } from "../store";

export const selectShops = (state: RootState) => state.shops.shops;
export const selectShopActivated = (state: RootState) => state.shops.shopActivated;

export const selectShopById = (id?: string) => createSelector(
  [selectShops],
  (shops) => {
    return id ? shops.find(({_id}) => _id === id) : null;
  }
);