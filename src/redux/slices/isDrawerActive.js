import { createSlice } from "@reduxjs/toolkit";

const isDrawerActiveSlice = createSlice({
  name: "isDrawerActive",
  initialState: { value: false },
  reducers: {
    changeIsDrawerActive: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default isDrawerActiveSlice.reducer;
export const { changeIsDrawerActive } = isDrawerActiveSlice.actions;
