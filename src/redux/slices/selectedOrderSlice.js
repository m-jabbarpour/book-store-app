import { createSlice } from "@reduxjs/toolkit";

const selectedOrderSlice = createSlice({
  name: "selectedOrder",
  initialState: { value: {} },
  reducers: {
    setSelectedOrder: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default selectedOrderSlice.reducer;
export const { setSelectedOrder } = selectedOrderSlice.actions;
