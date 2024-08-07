import { useAuthContext } from "@/contexts/useAuthContext";
import useLogOut from "@/hooks/UseLogout";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

const UserProfileIcon = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogOut();

  return (
    <>
      {authUser ? (
        <details className="dropdown dropdown-end">
          <summary className="avatar">
            <div className=" w-12 rounded-full ">
              <img
                src={authUser.profilePicLink}
                className="rounded-full border-2 border-primary"
              />
            </div>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>Item 2</a>
            </li>
            <li className="text-error" onClick={logout}>
              <a>
                Logout <IoLogOut className="text-error h-6 w-6" />
              </a>
            </li>
          </ul>
        </details>
      ) : (
        <Link to={"/login"}>
          <button className="btn btn-primary ">Login</button>
        </Link>
      )}
    </>
  );
};

export default UserProfileIcon;
