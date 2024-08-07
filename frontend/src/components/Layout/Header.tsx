import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useAuthContext } from "@/contexts/useAuthContext";
import useLogOut from "@/hooks/UseLogout";
import { NavLogoLight } from "@/constants/images";
import HeaderThemeToggle from "./HeaderThemeToggle";

const Header = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogOut();

  return (
    <div className="fixed w-full z-10 border-b  backdrop-blur-md bg-white bg-opacity-80  shadow-md">
      <nav className="flex h-16  mq725:h-14  items-center justify-between px-4">
        <Link to={"/"}>
          <img src={NavLogoLight} className="h-14 mq725:h-10" />
        </Link>
        <div className="flex gap-4 items-center">
          <HeaderThemeToggle />
          {authUser ? (
            <div>
              <IoLogOut className="text-red-600 h-6 w-6" onClick={logout} />
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-primary  mq725:btn-sm">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
