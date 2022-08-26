import { createSlice } from "@reduxjs/toolkit";

const idEditBookActiveSlice = createSlice({
  name: "isEditBookActive",
  initialState: { value: false },
  reducers: {
    changeIsEditBookActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default idEditBookActiveSlice.reducer;
export const { changeIsEditBookActive } = idEditBookActiveSlice.actions;
