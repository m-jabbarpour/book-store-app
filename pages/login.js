import Link from "next/link";
import React from "react";
import LoginForm from "../components/custom/LoginForm";
import AuthLayout from "../Layouts/AuthLayout";

function login() {
  return (
    <AuthLayout>
      <LoginForm />
      <div className="mx-auto text-center mt-3">
        <span>عضو نیستید؟ </span>
        <Link href="signup">
          <span className="cursor-pointer hover:text-[#28C5CC]">ثبت‌نام</span>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default login;
