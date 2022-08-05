import React from "react";
import DiscountCodeInput from "./DiscountCodeInput";

function OrderDetails({ cart }) {
  return (
    <div className="w-full md:w-2/5 md:mr-5 mb-4 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-center border-b-2 border-neutral-500 mt-5 mb-10 pt-2">
        <span className="bg-white font-bold leading-3 pb-1 px-2">
        جزئیات سفارش
        </span>
      </h2>
      <DiscountCodeInput />
      <div className="flex justify-between mt-4">
        <span>مبلغ کل بدون تخفیف</span>
        <span>{cart.subTotal.toLocaleString("fa-IR")} تومان</span>
      </div>
      <div className="flex justify-between mt-4 text-red-500">
        <span>سود شما</span>
        <span>{cart.discount.toLocaleString("fa-IR")} تومان</span>
      </div>
      <div className="flex justify-between mt-4">
        <span>مبلغ کل با تخفیف</span>
        <span>{cart.total.toLocaleString("fa-IR")} تومان</span>
      </div>
    </div>
  );
}

export default OrderDetails;
