import { createSlice } from "@reduxjs/toolkit";

const managementMenuSlice = createSlice({
  name: "managementMenu",
  initialState: {
    option: "books",
  },
  reducers: {
    setManagementOption: (state, action) => {
      state.option = action.payload;
    },
  },
});

export default managementMenuSlice.reducer;
export const { setManagementOption } = managementMenuSlice.actions;
