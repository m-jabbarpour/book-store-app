import React, { useEffect, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { setSearchedWord } from "../../src/redux/slices/searchSlice";
import { fetchBooks } from "../../src/redux/slices/booksSlice";
import { setFoundBooks } from "../../src/redux/slices/searchSlice";

function SearchBarSm() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const searchedWord = useSelector((store) => store.search.searchedWord);
  const books = useSelector((store) => store.books.value);
  const dispatch = useDispatch();
  const minimumCharacters = 3;

  useEffect(() => {
    if (searchedWord.length === minimumCharacters) {
      dispatch(fetchBooks());
    }
  }, [searchedWord]);

  const handleChange = (e) => {
    dispatch(setSearchedWord(e.target.value));
  };

  const handleSearch = () => {
    if (searchedWord.length >= minimumCharacters) {
      dispatch(setFoundBooks(books));
      if (router.pathname !== "/search-results") router.push("/search-results");
    }
  };

  return (
    <>
      {isSearchActive ? (
        <div className="w-screen h-[5rem] z-10 fixed top-0 right-0 flex justify-between p-3 bg-gray-200">
          <SearchIcon className="w-8 cursor-pointer" onClick={handleSearch} />
          <input
            className="w-4/5 bg-transparent focus:outline-0"
            type="text"
            value={searchedWord}
            onChange={handleChange}
          />
          <ChevronLeftIcon
            className="w-8 cursor-pointer"
            onClick={() => setIsSearchActive(false)}
          />
        </div>
      ) : (
        <div
          className="p-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={() => setIsSearchActive(true)}
        >
          <SearchIcon className="w-4" />
        </div>
      )}
    </>
  );
}

export default SearchBarSm;
