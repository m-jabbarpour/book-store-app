import Image from "next/image";
import React from "react";
import logo from "../../public/logos/logo.svg";
import SearchBarLg from "./SearchBarLg";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

function HeaderMd() {
  return (
    <header className="hidden md:block shadow-lg">
      <div className="container mx-auto px-12 py-4 rounded-lg flex justify-between">
        <div className="flex gap-x-4 items-center">
          <Link href="http://localhost:3000">
            <Image
              layout="fixed"
              src={logo}
              width="48"
              height="48"
              className=" cursor-pointer"
            />
          </Link>
          <span className=" cursor-pointer">دسته‌بندی</span>
          <SearchBarLg />
        </div>
        <div className="flex gap-x-4 items-center">
          <Link href="/management/login">
            <span className=" cursor-pointer">مدیریت</span>
          </Link>
          <Link href="/login">
            <UserCircleIcon className="w-6 cursor-pointer" />
          </Link>
          <Link href="http://localhost:3000/cart">
            <ShoppingBagIcon className="w-6 cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderMd;
