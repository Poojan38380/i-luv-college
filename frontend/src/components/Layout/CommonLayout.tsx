import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";

const CommonLayout = () => {
  const [theme, setTheme] = useState("light-theme");

  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "light-theme";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="" data-theme={theme}>
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <div className="pt-16 mq725:pt-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
