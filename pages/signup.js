import React from "react";
import SignupForm from "../components/custom/signupForm";
import AuthLayout from "../Layouts/AuthLayout";

function signup() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}

export default signup;
