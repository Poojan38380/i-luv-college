import ErrorToast from "@/components/Toasts/ErrorToast";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useState } from "react";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users/logout");

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("user-token");

      setAuthUser(null);
    } catch (error) {
      console.log("Error in UseLogout hook ");

      ErrorToast(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogOut;
