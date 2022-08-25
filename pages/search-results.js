import { useSelector } from "react-redux";
import BooksContainer from "../components/custom/BooksContainer";
import NoBookFound from "../components/custom/NoBookFound";
import CommonLayout from "../Layouts/CommonLayout";

function searchResults() {
  const foundBooks = useSelector((store) => store.search.foundBooks);
  return (
    <CommonLayout>
      <div className="container mx-auto px-12">
        {foundBooks.length > 0 ? (
          <BooksContainer books={foundBooks} />
        ) : (
          <NoBookFound />
        )}
      </div>
    </CommonLayout>
  );
}

export default searchResults;
