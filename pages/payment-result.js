import Link from "next/link";
import React from "react";

function paymentResult() {
  return (
    <div className="container mx-auto flex items-center w-full h-full">
      <div className="mx-auto mt-10 flex flex-col">
        <span>پرداخت با موفقیت انجام شد.</span>
        <Link href="/">
          <span className="cursor-pointer">بازگشت به سایت</span>
        </Link>
      </div>
    </div>
  );
}

export default paymentResult;
