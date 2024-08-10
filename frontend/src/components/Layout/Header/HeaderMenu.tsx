import { Link } from "react-router-dom";
import { FaUniversity } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

const HeaderMenu = ({ mobile }: { mobile: boolean }) => {
  return (
    <>
      <li>
        <Link
          to={"/"}
          className={`flex items-center ${mobile ? "text-lg" : ""} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </Link>
      </li>

      <li>
        <Link
          to={"/colleges"}
          className={`flex items-center ${mobile ? "text-lg" : ""} `}
        >
          <FaUniversity />
          Colleges
        </Link>
      </li>
      <li>
        <Link
          to={"https://insigh.to/b/i-luv-college"}
          className={`flex items-center ${mobile ? "text-lg" : ""} `}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlinePlusCircle />
          Suggest a Feature
        </Link>
      </li>

      {/* <li>
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
      </li> */}
    </>
  );
};

export default HeaderMenu;
