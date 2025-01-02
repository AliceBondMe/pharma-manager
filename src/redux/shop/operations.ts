import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { handleError } from "../helpers";
import { ErrorResponse, ShopData, ShopResponse} from '../types';

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
