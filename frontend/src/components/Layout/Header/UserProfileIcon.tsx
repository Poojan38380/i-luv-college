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
          <summary className="avatar cursor-pointer">
            <div className="ring-accent ring-offset-base-100 w-10   rounded-full ring ring-offset-2">
              <img src={authUser.profilePicLink} />
            </div>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border-base-300 border-2">
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
        <Link to={"/auth/login"}>
          <button className="btn btn-primary mq450:btn-ghost  ">Login</button>
        </Link>
      )}
    </>
  );
};

export default UserProfileIcon;
