import { createSlice } from "@reduxjs/toolkit";

const filteredPublicationsSlice = createSlice({
  name: "filteredPublications",
  initialState: { value: [] },
  reducers: {
    addPublication: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removePublication: (state, action) => {
      state.value = state.value.filter(
        (publication) => publication !== action.payload
      );
    },
  },
});

export const { addPublication, removePublication } =
  filteredPublicationsSlice.actions;
export default filteredPublicationsSlice.reducer;
