import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookSwiper from "./BookSwiper";
import { fetchBooks } from "../../src/redux/slices/booksSlice";

function RecommendedBooksBySubCategory({ currentBook }) {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const [otherBooksOfSubCategory, setOtherBooksOfSubCategory] = useState([]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    if (books.status === "success") {
      const temp = books.value.filter(
        (book) =>
          book.subCategory === currentBook.subCategory &&
          book.id !== currentBook.id
      );
      setOtherBooksOfSubCategory(temp);
    }
  }, [books.status]);

  if(otherBooksOfSubCategory.length === 0) return

  return (
    <div className="container mx-auto px-12 pt-4 pb-6 sm:pt-8 sm:pb-12 bg-neutral-100">
      <div className="flex justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-bold">{`سایر کتاب‌های ${currentBook.subCategory}`}</h2>
      </div>
      <BookSwiper books={otherBooksOfSubCategory} />
    </div>
  );
}

export default RecommendedBooksBySubCategory;
