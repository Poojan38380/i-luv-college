import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const CommonLayout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isdark = JSON.parse(localStorage.getItem("isdark")!);
    setTheme(isdark ? "dark" : "light");
  }, []);

  return (
    <div className="" data-theme={theme}>
      <Header />
      <div className="pt-16 mq725:pt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
