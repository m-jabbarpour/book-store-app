import React from "react";
import HeaderSm from "../components/common/HeaderSm";
import HeaderMd from "../components/common/HeaderMd";

function AuthLayout({ children }) {
  return (
    <>
      <HeaderSm />
      <HeaderMd />
      {children}
    </>
  );
}

export default AuthLayout;
