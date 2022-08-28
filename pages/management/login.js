import React from "react";
import LoginManagement from "../../components/custom/LoginManagement";
import AuthLayout from "../../Layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <LoginManagement />
    </AuthLayout>
  );
}

export default Login;
