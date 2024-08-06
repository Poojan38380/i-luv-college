import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CommonLayout = () => {
  return (
    <div className="" data-theme="light">
      <Header />
      <div className="h-16 mq725:h-14"></div>
      <Outlet />

      <Footer />
    </div>
  );
};

export default CommonLayout;
