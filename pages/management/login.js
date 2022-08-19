import React from "react";
import LoginManagement from "../../components/custom/LoginManagement";
import AuthLayout from "../../Layouts/AuthLayout";

function login() {
  return (
    <AuthLayout>
      <LoginManagement />
    </AuthLayout>
  );
}

export default login;
