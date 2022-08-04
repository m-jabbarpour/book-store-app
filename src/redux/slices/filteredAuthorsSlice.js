import { createSlice } from "@reduxjs/toolkit";

const filteredAuthorsSlice = createSlice({
  name: "filteredAuthors",
  initialState: { value: [] },
  reducers: {
    addAuthor: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeAuthor: (state, action) => {
      state.value = state.value.filter((author) => author !== action.payload);
    },
  },
});

export const { addAuthor, removeAuthor } = filteredAuthorsSlice.actions;
export default filteredAuthorsSlice.reducer;
