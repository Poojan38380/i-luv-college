import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const SignupForm = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const { loading, signup } = UseSignup();

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   console.log(email, password);
  //   await signup(email, password);
  // };

  return (
    <>
      <div className="">
        <form>
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
            type="text"
            placeholder="Email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-950 rounded border focus:border-teal-500"
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
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
              <Link to="/">Sign Up</Link>
              {/* )} */}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
