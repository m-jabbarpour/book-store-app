import Link from "next/link";

import SignupForm from "../components/custom/SignupForm";
import AuthLayout from "../Layouts/AuthLayout";

function Signup() {
  return (
    <AuthLayout>
      <SignupForm />
      <div className="mx-auto text-center mt-3 mb-5">
        <span> قبلاً ثبت‌نام کرده‌اید؟ </span>
        <Link href="/login">
          <span className="cursor-pointer hover:text-primary">ورود</span>
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Signup;
