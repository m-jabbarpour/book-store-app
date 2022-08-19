import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooksSummary = createAsyncThunk(
  "fetchBooksSummary",
  async () => {
    const res = await axios.get("/api/management/books");
    const books = res.data;
    return books;
  }
);

export const booksSummarySlice = createSlice({
  name: "booksSummary",
  initialState: {
    value: [],
    status: "idle",
  },
  reducers: {
    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
    editBook: (state, action) => {
      const editedBook = action.payload;
      
      state.value = state.value.map((book) =>
        book.id === editedBook.id ? editedBook : book
      );
    },
  },
  extraReducers: {
    [fetchBooksSummary.pending]: (state) => {
      state.status = "pending";
    },
    [fetchBooksSummary.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "success";
    },
    [fetchBooksSummary.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default booksSummarySlice.reducer;
export const { deleteBook, editBook } = booksSummarySlice.actions;
