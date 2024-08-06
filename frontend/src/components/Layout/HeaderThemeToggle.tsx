import { useEffect, useState } from "react";

const HeaderThemeToggle = () => {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("isdark")!)
  );
  useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <input
      type="checkbox"
      value="synthwave"
      className="toggle theme-controller"
      checked={isdark}
      onChange={() => {
        setIsdark(!isdark);
        window.location.reload();
      }}
    />
  );
};

export default HeaderThemeToggle;
