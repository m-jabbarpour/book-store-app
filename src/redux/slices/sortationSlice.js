import { createSlice } from "@reduxjs/toolkit";

const sortationSlice = createSlice({
  name: "sortation",
  initialState: {
    value: "highestRate",
  },
  reducers: {
    setSortation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSortation } = sortationSlice.actions;
export default sortationSlice.reducer;
