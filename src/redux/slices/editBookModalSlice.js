import { createSlice } from "@reduxjs/toolkit";

const editBookModalSlice = createSlice({
  name: "editBookModal",
  initialState: { value: false },
  reducers: {
    showEditBookModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default editBookModalSlice.reducer;
export const { showEditBookModal } = editBookModalSlice.actions;
