import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
  const res = await axios.get("/api/books");
  const books = res.data;
  return books;
});

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: [],
    status: "idle",
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = "pending";
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "success";
    },
    [fetchBooks.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default booksSlice.reducer;
