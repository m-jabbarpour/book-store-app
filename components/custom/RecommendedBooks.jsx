import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookSwiper from "./BookSwiper";
import { fetchBooks } from "../../src/redux/slices/booksSlice";

function RecommendedBooks({ currentBook, property }) {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const [otherBooksOfProperty, setOtherBooksOfProperty] = useState([]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    if (books.status === "success") {
      let temp;
      if (property === "authors") {
        temp = books.value.filter(
          (book) =>
            book.authors.some((author) =>
              currentBook.authors.includes(author)
            ) && book.id !== currentBook.id
        );
      } else {
        temp = books.value.filter(
          (book) =>
            book[property] === currentBook[property] &&
            book.id !== currentBook.id
        );
      }
      setOtherBooksOfProperty(temp);
    }
  }, [books.status]);

  if (otherBooksOfProperty.length === 0) return;

  return (
    <div className="container mx-auto px-12 pt-4 pb-6 sm:pt-8 sm:pb-12 bg-neutral-100">
      <div className="flex justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-bold">{`سایر کتاب‌های ${currentBook[property]}`}</h2>
      </div>
      <BookSwiper books={otherBooksOfProperty} />
    </div>
  );
}

export default RecommendedBooks;
