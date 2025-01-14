import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { handleError } from "../helpers";
import { EditShopData, ErrorResponse, ShopData, ShopResponse} from '../types';

export const createShop = createAsyncThunk<
  ShopResponse,
  ShopData,
  { rejectValue: ErrorResponse }
>("shop/create", async (shopInfo: ShopData, thunkAPI) => {
  try {
    const response = await axios.post<ShopResponse>("/shop/create", shopInfo);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const editShop = createAsyncThunk<
  ShopResponse,
  EditShopData,
  { rejectValue: ErrorResponse }
>("shop/edit", async (shopData: EditShopData, thunkAPI) => {
  try {
    const response = await axios.put<ShopResponse>(`/shop/${shopData.id}/update`, shopData.shopInfo);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue({ message: errorMessage });
  }
});

export const getShops = createAsyncThunk<
  ShopResponse[],
  void,
  {rejectValue: ErrorResponse}
  >("shop/get", async (_, thunkApi) => {
  try {
    const response = await axios<ShopResponse[]>("/shop");
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue({ message: errorMessage });
  }
});

export const deleteShop = createAsyncThunk<
  string,
  string,
  {rejectValue: ErrorResponse}
  >("shop/delete", async (shopId: string, thunkApi) => {
  try {
    await axios.delete<void>(`/shop/${shopId}`);
    return shopId;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue({ message: errorMessage });
  }
});