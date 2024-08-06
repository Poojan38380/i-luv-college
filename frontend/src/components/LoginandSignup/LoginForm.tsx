import { Link } from "react-router-dom";
import { useState } from "react";
import UseLogin from "@/hooks/UseLogin";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const { loading, login } = UseLogin();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await login(username, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative mb-4">
            <input
              className="p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.634A11.035 11.035 0 0112 4.5c3.312 0 6.393 1.474 8.02 4.134M20.02 15.366A11.035 11.035 0 0112 19.5a11.035 11.035 0 01-8.02-4.134M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.634A11.035 11.035 0 0112 4.5c3.312 0 6.393 1.474 8.02 4.134M20.02 15.366A11.035 11.035 0 0112 19.5a11.035 11.035 0 01-8.02-4.134M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3l18 18"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className="flex items-center">
            <button
              className="btn btn-accent ml-auto w-1/2  p-2 rounded font-semibold"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <Link to="/">Log In</Link>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
