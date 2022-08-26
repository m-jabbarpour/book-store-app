import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk("fetchOrders", async () => {
  const res = await axios.get("/api/management/orders");
  const orders = res.data;
  return orders;
});

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    value: [],
    status: "idle",
  },
  reducers: {
    addOrder: (state, action) => {
      state.value.push(action.payload);
    },
  },
  extraReducers: {
    [fetchOrders.pending]: (state) => {
      state.status = "pending";
    },
    [fetchOrders.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "success";
    },
    [fetchOrders.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default ordersSlice.reducer;
// export const {  } = ordersSlice.actions;
