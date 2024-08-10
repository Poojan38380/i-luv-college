import { useAuthContext } from "@/contexts/useAuthContext";

const WelcomeUser = () => {
  const { authUser } = useAuthContext();
  if (authUser !== null) {
    return (
      <div className="font-bangers text-4xl">
        Welcome{" "}
        <span className="tracking-wider text-primary ml-2">
          {authUser.username}
        </span>
        ,
      </div>
    );
  }
  return null;
};

export default WelcomeUser;
