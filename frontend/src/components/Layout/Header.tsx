import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { useAuthContext } from "@/contexts/useAuthContext";
import useLogOut from "@/hooks/UseLogout";

const Header = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogOut();
  console.log(authUser);
  return (
    <div>
      <div className="fixed w-full z-10 border-b bg-zinc-950  shadow-md">
        <nav className="flex h-16 items-center justify-between px-4">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          </Link>
          {authUser ? (
            <div>
              <IoLogOut className="text-red-600 h-6 w-6" onClick={logout} />
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
