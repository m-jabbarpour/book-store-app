import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import booksSlice from "../slices/booksSlice";
import cartSlice from "../slices/cartSlice";
import displayedBooksSlice from "../slices/displayedBooksSlice";
import filteredAuthorsSlice from "../slices/filteredAuthorsSlice";
import filteredPublicationsSlice from "../slices/filteredPublicationsSlice";
import filteredSubCategory from "../slices/filteredSubCategory";
import searchSlice from "../slices/searchSlice";
import sortationSlice from "../slices/sortationSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const combinedReducers = combineReducers({
  books: booksSlice,
  displayedBooks: displayedBooksSlice,
  sortation: sortationSlice,
  filteredSubCategory: filteredSubCategory,
  filteredPublications: filteredPublicationsSlice,
  filteredAuthors: filteredAuthorsSlice,
  search: searchSlice,
  cart: cartSlice,
});

const persistedReducers = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducers,
});

export const persistor = persistStore(store);
