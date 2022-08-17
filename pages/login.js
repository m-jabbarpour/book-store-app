import React from "react";
import LoginForm from "../components/custom/LoginForm";
import AuthLayout from "../Layouts/AuthLayout";

function login() {
  return <AuthLayout>
    <LoginForm/>
  </AuthLayout>;
}

export default login;
