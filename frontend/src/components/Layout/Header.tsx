import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useAuthContext } from "@/contexts/useAuthContext";
import useLogOut from "@/hooks/UseLogout";
import { NavLogoLight } from "@/constants/images";

const Header = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogOut();
  console.log(authUser);
  return (
    <div className="fixed w-full z-10 border-b  backdrop-blur-md bg-white bg-opacity-80  shadow-md">
      <nav className="flex h-16  mq725:h-14  items-center justify-between px-4">
        <Link to={"/"}>
          <img src={NavLogoLight} className="h-14 mq725:h-10" />
        </Link>
        {authUser ? (
          <div>
            <IoLogOut className="text-red-600 h-6 w-6" onClick={logout} />
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="btn mq725:btn-sm">Login</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
