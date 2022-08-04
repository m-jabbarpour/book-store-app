import { createSlice } from "@reduxjs/toolkit";

const displayedBooksSlice = createSlice({
  name: "displaedBooks",
  initialState: {
    value: [],
  },
  reducers: {
    setDisplayedBooks: (state, action) => {
      const books = action.payload.books;
      const filteredSubCategory = action.payload.filteredSubCategory;
      const filteredAuthors = action.payload.filteredAuthors;
      const filteredPublications = action.payload.filteredPublications;

      const booksBySubCategory = books.filter(
        (book) => book.subCategory === filteredSubCategory
      );

      if (filteredAuthors.length === 0 && filteredPublications.length === 0) {
        state.value = booksBySubCategory;
      } else if (
        filteredAuthors.length > 0 &&
        filteredPublications.length > 0
      ) {
        state.value = booksBySubCategory.filter(
          (book) =>
            filteredAuthors.some((author) => book.authors.includes(author)) &&
            filteredPublications.includes(book.publications)
        );
      } else if (filteredAuthors.length > 0) {
        state.value = booksBySubCategory.filter((book) =>
          filteredAuthors.some((author) => book.authors.includes(author))
        );
      } else {
        state.value = booksBySubCategory.filter((book) =>
          filteredPublications.includes(book.publications)
        );
      }
    },
    sortDisplayedBooks: (state, action) => {
      const sortation = action.payload;

      switch (sortation) {
        case "highestRate":
          state.value.sort((a, b) => b.rate - a.rate);
          break;
        case "highestPrice":
          state.value.sort((a, b) => b.price - a.price);
          break;
        case "lowestPrice":
          state.value.sort((a, b) => a.price - b.price);
          break;
        default:
          break;
      }
    },
   
  },
});

export const { setDisplayedBooks, sortDisplayedBooks } =
  displayedBooksSlice.actions;
export default displayedBooksSlice.reducer;
