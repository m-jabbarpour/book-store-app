import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
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
    <main className="flex flex-col justify-between pt-4 pb-6 sm:pt-8 sm:pb-12 mx-auto">
      <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-16 lg:gap-7 xl:gap-8 2xl:gap-11">
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
