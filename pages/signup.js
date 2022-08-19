import Link from "next/link";
import React from "react";
import SignupForm from "../components/custom/signupForm";
import AuthLayout from "../Layouts/AuthLayout";

function signup() {
  return (
    <AuthLayout>
      <SignupForm />
      <div className="mx-auto text-center mt-3 mb-5">
        <span> قبلاً ثبت‌نام کرده‌اید؟ </span>
        <Link href="/login">
          <span className="cursor-pointer hover:text-[#28C5CC]">ورود</span>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default signup;
