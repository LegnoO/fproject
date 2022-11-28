import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { listProductAPI } from "../services/productService";

export const getProductList = createAsyncThunk(
  "product/getall",
  listProductAPI
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: true,
    error: null,
    data: {},
  },
  reducers: {},
  extraReducers: {
    [getProductList.pending]: () => {},
    [getProductList.fulfilled]: (state, { payload }) => {
      Object.assign(state, {
        loading: false,
        error: null,
        data: payload,
      });
    },
    [getProductList.rejected]: (state, action) => {
      Object.assign(state, {
        loading: false,
        error: action.error,
      });
    },
  },
});

export const productReducer = productSlice.reducer;
