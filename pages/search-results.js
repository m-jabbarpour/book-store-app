import React from "react";
import { useSelector } from "react-redux";
import BooksContainer from "../components/custom/BooksContainer";
import CommonLayout from "../Layouts/CommonLayout";

function searchResults() {
  const foundBooks = useSelector((store) => store.search.foundBooks);
  return (
    <CommonLayout>
      <div className="container mx-auto px-12">
        <BooksContainer books={foundBooks} />
      </div>
    </CommonLayout>
  );
}

export default searchResults;
