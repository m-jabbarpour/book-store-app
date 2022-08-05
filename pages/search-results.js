import React from "react";
import { useSelector } from "react-redux";
import BooksContainer from "../components/custom/BooksContainer";
import Layout from "../Layout";

function searchResults() {
  const foundBooks = useSelector((store) => store.search.foundBooks);
  return (
    <Layout>
      <div className="container mx-auto px-12">
        <BooksContainer books={foundBooks} />
      </div>
    </Layout>
  );
}

export default searchResults;
