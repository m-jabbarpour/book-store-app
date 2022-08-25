import { useEffect, useState } from "react";

import Filter from "./Filter";
import Menu from "./Menu";

import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../../src/redux/slices/booksSlice";
import {
  addAuthor,
  removeAuthor,
} from "../../src/redux/slices/filteredAuthorsSlice";
import {
  addPublication,
  removePublication,
} from "../../src/redux/slices/filteredPublicationsSlice";

function SideBar() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);
  const [authors, setAuthors] = useState([]);
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  useEffect(() => {
    if (books.status === "success") {
      const extractedPublications = books.value.map(
        (book) => book.publications
      );
      const uniquePublications = [...new Set(extractedPublications)];
      setPublications(uniquePublications);

      const extractedAuthors = books.value.map((book) => book.authors);
      const mergedAuthors = [].concat.apply([], extractedAuthors);
      const uniqueAuthors = [...new Set(mergedAuthors)];
      setAuthors(uniqueAuthors);
    }
  }, [books.status]);

  return (
    <aside className="flex flex-col gap-4 md:basis-52 shrink-0 md:pb-6 mt-8 md:pl-8   bg-neutral-100">
      <Menu title="دسته‌بندی" options={publications} />
      <Filter
        title="نویسنده"
        options={authors}
        addFilter={addAuthor}
        removeFilter={removeAuthor}
      />
      <Filter
        title="انتشارات"
        options={publications}
        addFilter={addPublication}
        removeFilter={removePublication}
      />
    </aside>
  );
}

export default SideBar;
