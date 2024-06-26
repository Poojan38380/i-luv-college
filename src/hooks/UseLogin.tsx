import ErrorToast from "@/components/Toasts/ErrorToast";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useState } from "react";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log(email, password);
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("user-token", JSON.stringify(data));

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
