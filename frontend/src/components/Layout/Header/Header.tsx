import { Link } from "react-router-dom";
import { NavLogoDark, NavLogoLight } from "@/constants/images";
import HeaderThemeToggle from "./HeaderThemeToggle";
import MobileDrawer from "./MobileDrawer";
import HeaderMenu from "./HeaderMenu";
import UserProfileIcon from "./UserProfileIcon";

interface HeaderProps {
  theme: string;
  onThemeChange: (newTheme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeChange }) => {
  return (
    <div className="navbar bg-base-100 fixed w-full z-[99]  backdrop-blur-md  bg-opacity-80 shadow-md px-10 mq725:px-1 mq725:pr-3  ">
      <div className="navbar-start gap-2">
        <MobileDrawer theme={theme} />
        <Link to={"/"}>
          {theme === "dark-theme" || theme === "synthwave" ? (
            <img
              src={NavLogoDark}
              className="h-14 mq725:h-10  mq500:h-8 mq450:h-7 mq375:h-5"
            />
          ) : (
            <img
              src={NavLogoLight}
              className="h-14 mq725:h-10  mq500:h-8 mq450:h-7 mq375:h-5"
            />
          )}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <HeaderMenu />
        </ul>
      </div>
      <div className="navbar-end gap-2 mq450:gap-0 flex items-center">
        <HeaderThemeToggle onThemeChange={onThemeChange} />
        <UserProfileIcon />
      </div>
    </div>
  );
};

export default Header;
