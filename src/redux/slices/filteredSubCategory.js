import { createSlice } from "@reduxjs/toolkit";

const filteredSubCategorySlice = createSlice({
  name: "filteredSubCategory",
  initialState: {
    value: "توسعه فردی",
  },
  reducers: {
    setFilteredSubCategory: (state, action) => {
      state.value = action.payload;
      console.log(state.value)
    },
  },
});

export const { setFilteredSubCategory } = filteredSubCategorySlice.actions;
export default filteredSubCategorySlice.reducer;
