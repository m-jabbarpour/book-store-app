import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBanners = createAsyncThunk("fetchBanners", async () => {
  const res = await axios.get("/api/banners");
  const banners = res.data;
  return banners;
});

export const bannersSlice = createSlice({
  name: "banners",
  initialState: {
    value: [],
    status: "idle",
  },
  extraReducers: {
    [fetchBanners.pending]: (state) => {
      state.status = "pending";
    },
    [fetchBanners.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "success";
    },
    [fetchBanners.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default bannersSlice.reducer;
