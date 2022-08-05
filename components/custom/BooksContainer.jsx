import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import BookCard from "../../components/custom/BookCard";
import Pagination from "./Pagination";

let PageSize = 10;

function BooksContainer({ books }) {
  const [currentPage, setCurrentPage] = useState(1);
  const sortation = useSelector((store) => store.sortation.value);

  const currentBooks = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return books.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, sortation, books]);

  return (
    <main className="flex flex-col justify-between pt-4 pb-6 sm:pt-8 sm:pb-12 pr-8">
      <div className="flex flex-wrap gap-12">
        {currentBooks.map((book) => (
          <div className="flex justify-center}" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={books.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}

export default BooksContainer;
