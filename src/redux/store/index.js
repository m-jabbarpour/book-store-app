import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import booksSummarySlice from "../slices/booksSummarySlice";

import booksSlice from "../slices/booksSlice";
import cartSlice from "../slices/cartSlice";
import displayedBooksSlice from "../slices/displayedBooksSlice";
import filteredAuthorsSlice from "../slices/filteredAuthorsSlice";
import filteredPublicationsSlice from "../slices/filteredPublicationsSlice";
import filteredSubCategory from "../slices/filteredSubCategory";
import searchSlice from "../slices/searchSlice";
import sortationSlice from "../slices/sortationSlice";
import managementMunu from "../slices/managementMunu";
import selectedBookSlice from "../slices/selectedBookSlice";
import editBookModalSlice from "../slices/editBookModalSlice";
import orderDetailsModalSlice from "../slices/orderDetailsModalSlice";
import selectedOrderSlice from "../slices/selectedOrderSlice";
import bannersSlice from "../slices/bannersSlice";
import isEditBookActive from "../slices/isEditBookActiveSlice";
import ordersSlice from "../slices/ordersSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const combinedReducers = combineReducers({
  books: booksSlice,
  banners: bannersSlice,
  displayedBooks: displayedBooksSlice,
  sortation: sortationSlice,
  filteredSubCategory: filteredSubCategory,
  filteredPublications: filteredPublicationsSlice,
  filteredAuthors: filteredAuthorsSlice,
  search: searchSlice,
  cart: cartSlice,
  booksSummary: booksSummarySlice,
  orders: ordersSlice,
  managementMenu: managementMunu,
  selectedBook: selectedBookSlice,
  editBookModal: editBookModalSlice,
  orderDetailsModal: orderDetailsModalSlice,
  selectedOrder: selectedOrderSlice,
  isEditBookActive: isEditBookActive,
});

const persistedReducers = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducers,
});

export const persistor = persistStore(store);
