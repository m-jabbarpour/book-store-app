import { createSlice } from "@reduxjs/toolkit";

const isEditBookActiveSlice = createSlice({
  name: "isEditBookActive",
  initialState: { value: false },
  reducers: {
    changeIsEditBookActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default isEditBookActiveSlice.reducer;
export const { changeIsEditBookActive } = isEditBookActiveSlice.actions;
