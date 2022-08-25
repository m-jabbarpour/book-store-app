import HeaderSm from "../components/common/HeaderSm";
import HeaderMd from "../components/common/HeaderMd";

function AuthLayout({ children }) {
  return (
    <>
      <HeaderSm />
      <HeaderMd />
      <div className="container mx-auto px-5 md:px-12 mt-10">{children}</div>
    </>
  );
}

export default AuthLayout;
