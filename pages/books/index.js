import Head from "next/head";
import { useEffect } from "react";

import BooksContainer from "../../components/custom/BooksContainer";
import SideBar from "../../components/custom/SideBar";
import Sort from "../../components/custom/Sort";
import CommonLayout from "../../Layouts/CommonLayout";

import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../src/redux/slices/booksSlice";
import {
  setDisplayedBooks,
  sortDisplayedBooks,
} from "../../src/redux/slices/displayedBooksSlice";
import NoBookFound from "../../components/custom/NoBookFound";

function books() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const filteredAuthors = useSelector((store) => store.filteredAuthors.value);
  const filteredPublications = useSelector(
    (store) => store.filteredPublications.value
  );
  const filteredSubCategory = useSelector(
    (store) => store.filteredSubCategory.value
  );
  const sortation = useSelector((store) => store.sortation.value);
  const displayedBooks = useSelector((store) => store.displayedBooks.value);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    if (books.status === "success") {
      dispatch(
        setDisplayedBooks({
          books: books.value,
          filteredAuthors,
          filteredPublications,
          filteredSubCategory,
        })
      );
    }
  }, [
    books.status,
    filteredAuthors,
    filteredPublications,
    filteredSubCategory,
  ]);

  useEffect(() => {
    dispatch(sortDisplayedBooks(sortation));
  }, [sortation]);

  return (
    <>
      <Head>
        <title>طاقچه | کتاب‌ها</title>
      </Head>
      <CommonLayout>
        <div className="container mx-auto px-12 flex flex-col md:flex-row">
          <SideBar />
          <div className="grow">
            <Sort />
            {displayedBooks.length > 0 ? (
              <BooksContainer books={displayedBooks} />
            ) : (
              <NoBookFound />
            )}
          </div>
        </div>
      </CommonLayout>
    </>
  );
}

export default books;
