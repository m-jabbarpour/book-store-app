import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchedWord: "", foundBooks: [] },
  reducers: {
    setSearchedWord: (state, action) => {
      state.searchedWord = action.payload;
    },
    setFoundBooks: (state, action) => {
      const books = action.payload;
      const temp = books.filter((book) => book.title.includes(state.searchedWord));
      state.foundBooks = temp;
      console.log(state.foundBooks);
    },
  },
});

export const { setSearchedWord, setFoundBooks } = searchSlice.actions;
export default searchSlice.reducer;
