import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useAuthContext } from "@/contexts/useAuthContext";
import useLogOut from "@/hooks/UseLogout";
import { NavLogoDark, NavLogoLight } from "@/constants/images";
import HeaderThemeToggle from "./HeaderThemeToggle";
import MobileDrawer from "./MobileDrawer";

interface HeaderProps {
  theme: string;
  onThemeChange: (newTheme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onThemeChange }) => {
  const { authUser } = useAuthContext();
  const { logout } = useLogOut();

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
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-1">
        <HeaderThemeToggle onThemeChange={onThemeChange} />
        {authUser ? (
          <div>
            <IoLogOut className="text-red-600 h-6 w-6" onClick={logout} />
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn btn-primary mq725:btn-sm">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
