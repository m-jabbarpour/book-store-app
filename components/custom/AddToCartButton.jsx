import { useEffect, useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementBook,
  incrementBook,
  updateCartValues,
} from "../../src/redux/slices/cartSlice";

function AddToCartButton({ currentBook }) {
  const addedBooks = useSelector((store) => store.cart.addedBooks);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);

  const requiredBookDetails = {
    id: currentBook.id,
    title: currentBook.title,
    image: currentBook.image,
    price: currentBook.price,
  };

  useEffect(() => {
    const foundBook = addedBooks.find(
      (addedBook) => addedBook.id === currentBook.id
    );
    if (foundBook) setNumber(foundBook.number);
  }, []);

  const handlePlus = () => {
    setNumber((prev) => prev + 1);
    dispatch(incrementBook(requiredBookDetails));
    dispatch(updateCartValues());
  };
  const handleMinus = () => {
    setNumber((prev) => prev - 1);
    dispatch(decrementBook(requiredBookDetails));
    dispatch(updateCartValues());
  };

  return (
    <div className="w-full sm:w-[250px]">
      {number === 0 ? (
        <button
          className="w-full text-center text-white font-bold bg-primary rounded-lg py-2 cursor-pointer"
          onClick={handlePlus}
        >
          افزودن به سبد خرید
        </button>
      ) : (
        <div className="w-fit mx-auto flex items-center overflow-hidden rounded-lg">
          <div className="p-2 cursor-pointer bg-primary" onClick={handlePlus}>
            <PlusIcon className="w-6 text-white " />
          </div>
          <div className="w-[44px] text-center font-bold bg-neutral-200 h-full p-2">
            <span>{number}</span>
          </div>
          <div className="p-2 cursor-pointer bg-primary" onClick={handleMinus}>
            <MinusIcon className="w-6 text-white" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCartButton;
