import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { loading, login } = useLogIn();

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   await login(email, password);
  // };

  return (
    <>
      <div className="">
        <form>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center">
            <Button
              className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold"
              type="submit"
              // disabled={loading}
              // onClick={handleSubmit}
            >
              {/* {loading ? (
                <span className="loading loading-spinner"></span>
              ) : ( */}
              <Link to="/">Log In</Link>
              {/* )} */}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
