import HeaderSm from "../components/common/HeaderSm";
import HeaderMd from "../components/common/HeaderMd";
import Footer from "../components/common/Footer";

function CommonLayout({ children }) {
  return (
    <>
      <HeaderSm />
      <HeaderMd />
      {children}
      <Footer />
    </>
  );
}

export default CommonLayout;
