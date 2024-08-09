import ErrorToast from "@/components/Toasts/ErrorToast";
import SuccessToast from "@/components/Toasts/SuccessToast";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useState } from "react";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      const res = await fetch("/api/users/logout");

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("i-luv-college-local-token");

      setAuthUser(null);

      SuccessToast("Come back soon...");
    } catch (error) {
      console.error("Error in UseLogout hook ");

      if (error instanceof Error) {
        ErrorToast(error.message);
      } else {
        ErrorToast("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogOut;
