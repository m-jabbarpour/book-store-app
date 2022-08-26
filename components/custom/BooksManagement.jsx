import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { TrashIcon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/outline";
import { deleteBook } from "../../src/redux/slices/booksSummarySlice";
import EditBookModal from "./EditBookModal";
import { setSelectedBook } from "../../src/redux/slices/selectedBookSlice";
import { showEditBookModal } from "../../src/redux/slices/editBookModalSlice";
import { useEffect } from "react";
import { changeIsEditBookActive } from "../../src/redux/slices/isEditBookActiveSlice";

function BooksManagement({ booksSummary }) {
  const dispatch = useDispatch();
  const editBookModal = useSelector((store) => store.editBookModal.value);

  useEffect(() => {
    if (editBookModal)
      document.querySelector("body").classList.add("active-modal");
    else document.querySelector("body").classList.remove("active-modal");
  }, [editBookModal]);

  const handleAddBook = () => {
    dispatch(changeIsEditBookActive(false))
    dispatch(showEditBookModal(true));
  }

  const handleDeleteBook = (id) => {
    dispatch(deleteBook({ id: id }));
  };

  const handleEditBook = (book) => {
    dispatch(setSelectedBook(book));
    dispatch(changeIsEditBookActive(true))
    dispatch(showEditBookModal(true));
  };

  return (
    <div>
      <div className="container flex flex-col mx-auto px-12 py-6 rounded-lg justify-between">
        <button className="bg-primary rounded font-bold text-white p-2 mb-6 w-fit flex items-center gap-2"
        onClick={handleAddBook}>
          <span>افزودن کتاب جدید</span>
          <PlusCircleIcon className="w-6"/>
        </button>
        <div className="flex text-center w-full border-b-2 border-b-neutral-300 pb-2 font-bold">
          <h3 className="w-[5%]">ردیف</h3>
          <h3 className="w-[5%]">تصویر</h3>
          <h3 className="w-[25%]">عنوان</h3>
          <h3 className="w-[15%]">دسته</h3>
          <h3 className="w-[15%]">زیردسته</h3>
          <h3 className="w-[15%]">قیمت</h3>
          <h3 className="w-[10%]">موجودی</h3>
          <h3 className="w-[10%]"></h3>
        </div>
        {booksSummary.map((book, index) => (
          <div
            className="flex items-center text-center w-full border-b-2 border-b-neutral-300 py-2"
            key={book.id}
          >
            <h3 className="w-[5%]">{index + 1}</h3>
            <div className="w-[5%] ">
              <div className="relative mx-auto shrink-0 w-[30px] h-[44.4px] rounded overflow-hidden shadow-lg">
                <Image
                  src={book.image}
                  layout="fill"
                  title={book.title}
                  alt={book.title}
                />
              </div>
            </div>
            <h3 className="w-[25%] truncate">{book.title}</h3>
            <h3 className="w-[15%]">{book.category}</h3>
            <h3 className="w-[15%]">{book.subCategory}</h3>
            <h3 className="w-[15%]">
              {book.price.toLocaleString("fa-IR")} تومان
            </h3>
            <h3 className="w-[10%]">{book.quantity.toLocaleString("fa-IR")}</h3>
            <div className="w-[10%] flex justify-center items-center gap-4">
              <div
                className="bg-white rounded w-fit p-1 shadow cursor-pointer"
                onClick={() => handleDeleteBook(book.id)}
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
      <EditBookModal />
    </div>
  );
}

export default BooksManagement;
