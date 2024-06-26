import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="fixed w-full z-10 border-b bg-zinc-950  shadow-md">
        <nav className="flex h-16 items-center justify-between px-4">
          <div className="hidden lg:block">
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
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
