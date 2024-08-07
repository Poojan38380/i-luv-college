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
    <div className="navbar bg-base-100 fixed w-full z-[99]  shadow-md px-5 mq725:px-1  ">
      <div className="navbar-start gap-2">
        <MobileDrawer theme={theme} />
        <Link to={"/"}>
          {theme === "dark-theme" || theme === "synthwave" ? (
            <img src={NavLogoDark} className="h-14 mq725:h-10" />
          ) : (
            <img src={NavLogoLight} className="h-14 mq725:h-10" />
          )}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <HeaderMenu />
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <HeaderThemeToggle onThemeChange={onThemeChange} />
        <UserProfileIcon />
      </div>
    </div>
  );
};

export default Header;
