import { createSlice } from "@reduxjs/toolkit";

const selectedBookSlice = createSlice({
  name: "selectedBook",
  initialState: { value: {} },
  reducers: {
    setSelectedBook: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default selectedBookSlice.reducer;
export const {setSelectedBook} = selectedBookSlice.actions;
