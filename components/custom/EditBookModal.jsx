import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBook } from "../../src/redux/slices/booksSummarySlice";
import { showEditBookModal } from "../../src/redux/slices/editBookModalSlice";

function EditBookModal() {
  const editBookModal = useSelector((store) => store.editBookModal.value);
  const selectedBook = useSelector((store) => store.selectedBook.value);
  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState("");

  useEffect(() => {
    setTitleInput(selectedBook.title);
  }, [selectedBook]);

  const handleEditBook = (e) => {
    e.preventDefault();
    const editedBook = { ...selectedBook, name: titleInput };

    dispatch(editBook(editedBook));
    dispatch(showEditBookModal(false));
  };

  if (editBookModal) {
    return (
      <div className="w-full h-full absolute right-0 top-0 flex items-center bg-[#00000077]">
        <div className="w-1/2 mx-auto rounded-lg p-5 overflow-hidden bg-neutral-200">
          <form className="flex flex-col" onSubmit={handleEditBook}>
            <label htmlFor="name">عنوان کتاب:</label>
            <input
              className="focus:outline-none rounded p-2 mb-3 focus:shadow"
              name="name"
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            <label htmlFor="category">دسته:</label>
            <select
              className="focus:outline-none rounded p-2 mb-3 focus:shadow"
              name="category"
            >
              <option value="روان‌شناسی و موفقیت">روان‌شناسی و موفقیت</option>
            </select>
            <label htmlFor="subCategory">زیردسته:</label>
            <select
              className="focus:outline-none rounded p-2 mb-6 focus:shadow"
              name="subCategory"
            >
              <option value="توسعه فردی">توسعه فردی</option>
              <option value="خانواده و ازدواج">خانواده و ازدواج</option>
            </select>
            <button className="bg-[#28C5CC] font-bold text-white rounded p-2 cursor-pointer hover:shadow">
              ثبت تغییرات
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditBookModal;
