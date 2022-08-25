import { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import {
  checkDiscountCode,
  setDiscountCode,
  updateCartValues,
} from "../../src/redux/slices/cartSlice";

function DiscountCodeInput() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setDiscountCode(inputValue));
    dispatch(checkDiscountCode());
    dispatch(updateCartValues());
    setInputValue("");
  };

  return (
    <form
      className="flex items-center w-full  rounded overflow-hidden bg-neutral-100 shadow"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="کد تخفیف خود را وارد کنید"
        className="bg-transparent grow p-2 focus:outline-none text-center text-xs"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="h-full shrink-0 bg-primary">
        <CheckIcon className="w-10 text-white" />
      </button>
    </form>
  );
}

export default DiscountCodeInput;
