import { createSlice } from "@reduxjs/toolkit";

const orderDetailsModalSlice = createSlice({
  name: "orderDetailsModal",
  initialState: { value: false },
  reducers: {
    showOrderDetailsModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default orderDetailsModalSlice.reducer;
export const { showOrderDetailsModal } = orderDetailsModalSlice.actions;
