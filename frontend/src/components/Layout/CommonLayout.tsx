import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CommonLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default CommonLayout;
