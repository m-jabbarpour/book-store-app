import React, { useMemo, useState } from "react";
import Pagination from "./Pagination";

let PageSize = 3;

function Comments({ bookTitle, comments }) {
  const [currentPage, setCurrentPage] = useState(1);
  const currentComments = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return comments.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="bg-neutral-50">
      <div className=" container mx-auto px-12 py-8">
        <h2 className="text-sm sm:text-xl font-bold mb-4">
          {`نظرات کاربران درباره کتاب ${bookTitle}`}
        </h2>
        {currentComments.map((comment, index) => (
          <div
            key={index}
            className="py-3 border-b border-neutral-400 border-dotted"
          >
            <h6 className="text-sm">{comment.userName}</h6>
            <span>{"⭐".repeat(comment.rate)}</span>
            <p className="text-xs text-justify text-gray-600 px-10">
              {comment.text}
            </p>
          </div>
        ))}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={comments.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Comments;
