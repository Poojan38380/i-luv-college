import { useAuthContext } from "@/contexts/useAuthContext";
import { Link, useLocation } from "react-router-dom";
import LogOutDialog from "./LogOutDialog";

const UserProfileIcon = () => {
  const { authUser } = useAuthContext();
  const location = useLocation();

  // Check if the current path starts with '/auth'
  const isAuthPath = location.pathname.startsWith("/auth");

  return (
    <>
      {authUser ? (
        <details className="dropdown dropdown-end">
          <summary className="avatar cursor-pointer">
            <div className="ring-accent ring-offset-base-100 w-10 mq725:w-8 rounded-full ring ring-offset-2">
              <img src={authUser.profilePicLink} alt="User Profile" />
            </div>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-min p-2 shadow-lg border-base-300 border-2">
            <li>
              <a>Item 2</a>
            </li>

            <LogOutDialog />
          </ul>
        </details>
      ) : (
        !isAuthPath && (
          <Link to={"/auth/login"}>
            <button className="btn btn-primary mq450:btn-ghost">Login</button>
          </Link>
        )
      )}
    </>
  );
};

export default UserProfileIcon;
