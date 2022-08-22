import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilteredSubCategory } from "../../src/redux/slices/filteredSubCategory";

import BookSwiper from "./BookSwiper";

function BookSubCategory({ subCategory, books }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [booksOfSelectedCategory, setBooksOfSelectedCategory] = useState([]);

  useEffect(() => {
    setBooksOfSelectedCategory(
      books.filter((book) => book.subCategory === subCategory)
    );
  }, [books]);

  const goToSelectedSubCategory = () => {
    dispatch(setFilteredSubCategory(subCategory));
    router.push("/books");
  };

  return (
    <div className="container mx-auto px-12 pt-4 pb-6 sm:pt-8 sm:pb-12 bg-neutral-100">
      <div className="flex justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-bold">{subCategory}</h2>
        <span
          className="text-xs sm:text-base text-gray-500 cursor-pointer"
          onClick={goToSelectedSubCategory}
        >
          مشاهده همه
        </span>
      </div>
      <BookSwiper books={booksOfSelectedCategory} />
    </div>
  );
}

export default BookSubCategory;
