import ErrorToast from "@/components/Toasts/ErrorToast";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useState } from "react";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      console.log(username, password);
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("i-luv-college-local-token", JSON.stringify(data));

      setAuthUser(data);
    } catch (error: any) {
      console.log("Error in Uselogin hook ");

      ErrorToast(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default UseLogin;
