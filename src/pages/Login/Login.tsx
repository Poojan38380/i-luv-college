import LoginForm from "@/components/LoginandSignup/LoginForm";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Logo
          </Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quasi dolorem, sequi dicta vel libero fugiat culpa recusandae vero
              porro, possimus, accusamus minima repudiandae consequatur maiores
              omnis alias placeat animi? Quas.&rdquo;
            </p>
            <footer className="text-sm">Lorem Ipsum</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center bg-white p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login to your account
            </h1>
          </div>
          <LoginForm />
          <div className="flex px-8 w-full text-center text-sm text-muted-foreground space-x-2 ">
            <p>Don't have an account ?</p>
            <Link to={"/signup"}>
              <p className="text-zinc-700 font-semibold">Sign Up</p>
            </Link>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>
            and
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
