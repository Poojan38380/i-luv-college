import { Link } from "react-router-dom";
import { useState } from "react";
import UseSignup from "@/hooks/UseSignup";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, signup } = UseSignup();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(username, password);
    await signup(username, password);
  };

  return (
    <>
      <div className="">
        <form>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center">
            <button
              className="btn btn-accent ml-auto w-1/2   p-2 rounded font-semibold"
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <Link to="/">Sign Up</Link>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
