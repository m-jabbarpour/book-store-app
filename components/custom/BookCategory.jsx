import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BookSwiper from "./BookSwiper";

function BookCategory({ title, books }) {
  return (
    <div className="container mx-auto px-12 pt-4 pb-6 sm:pt-8 sm:pb-12 bg-neutral-100">
      <div className="flex justify-between mb-6">
        <h2 className="text-sm sm:text-lg font-bold">{title}</h2>
        <Link href="/books">
          <span className="text-xs sm:text-base text-gray-500 cursor-pointer">
            مشاهده همه
          </span>
        </Link>
      </div>
      <BookSwiper books={books} />
    </div>
  );
}

export default BookCategory;
