function DeleteBookModal() {
  return (
    <div className="w-full h-[100%] fixed z-10 right-0 top-0 flex items-center bg-[#00000077]">
      <div className="w-1/2 mx-auto rounded-lg p-5 overflow-hidden bg-neutral-200">
        <span>آیا از حذف کتاب اطمینان دارید؟</span>
        <button className="rounded p-2 font-bold text-white bg-green-500">
          بله
        </button>
        <button className="rounded p-2 font-bold text-white bg-red-500">
          خیر
        </button>
      </div>
    </div>
  );
}

export default DeleteBookModal;
