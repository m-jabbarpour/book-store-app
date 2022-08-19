import Link from "next/link";
import React, { useEffect } from "react";
import ManagementMenu from "./ManagementMenu";

function ManagementHeader() {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-12 py-4 rounded-lg flex justify-between">
        <h1 className="text-lg font-bold">پنل مدیریت فروشگاه کتاب</h1>
        <ManagementMenu />
        <Link href="/">
          <span className="cursor-pointer hover:text-[#28C5CC] hover:font-bold">
            بازگشت به سایت
          </span>
        </Link>
      </div>
    </div>
  );
}

export default ManagementHeader;
