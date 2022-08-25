import Image from "next/image";
import { useDispatch } from "react-redux";

import { TrashIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/outline";
import { deleteBook } from "../../src/redux/slices/booksSummarySlice";
import EditBookModal from "./EditBookModal";
import { setSelectedBook } from "../../src/redux/slices/selectedBookSlice";
import { showEditBookModal } from "../../src/redux/slices/editBookModalSlice";

function BooksManagement({ booksSummary }) {
  const dispatch = useDispatch();

  const handleEditBook = (book) => {
    dispatch(setSelectedBook(book));
    dispatch(showEditBookModal(true));
  };

  return (
    <>
      <div className="container mx-auto px-12 py-4 rounded-lg flex justify-between">
        <div className=" w-full ">
          <div>
            <div className="flex border-b-2 border-b-neutral-300 font-bold">
              <div className="w-[50%] pb-3 pr-16 text-right">عنوان کتاب</div>
              <div className="text-center w-[40%] pb-3">دسته‌بندی</div>

              <div className="w-[10%] pb-3"></div>
            </div>
          </div>
          <div>
            {booksSummary.map((book) => (
              <div
                key={book.id}
                className="w-full flex border-b-2 border-b-neutral-300"
              >
                <div className="w-[50%] overflow-hidden p-3 flex gap-3  items-center">
                  <div className="relative shrink-0 w-[30px] h-[44.4px] rounded overflow-hidden shadow-lg">
                    <Image
                      src={book.image}
                      layout="fill"
                      title={book.title}
                      alt={book.title}
                    />
                  </div>
                  <h5 className="grow shrink-0 truncate">{book.title}</h5>
                </div>
                <div className="flex justify-center items-center w-[40%] p-3">
                  {book.category} / {book.subCategory}
                </div>

                <div className="flex items-center w-[10%]  gap-2 p-3 text-center">
                  <div
                    className="bg-white rounded w-fit p-1 shadow cursor-pointer"
                    onClick={() => dispatch(deleteBook({ id: book.id }))}
                  >
                    <TrashIcon className="w-5" />
                  </div>
                  <div
                    className="bg-white rounded w-fit p-1 shadow cursor-pointer"
                    onClick={() => handleEditBook(book)}
                  >
                    <PencilIcon className="w-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <EditBookModal />
    </>
  );
}

export default BooksManagement;
