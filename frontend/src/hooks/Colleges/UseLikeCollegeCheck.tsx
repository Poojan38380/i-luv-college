import ErrorToast from "@/components/Toasts/ErrorToast";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

const UseLikeCollegeCheck = (collegeId: string) => {
  const [loading, setLoading] = useState(true);
  const [hasLiked, setHasLiked] = useState<boolean>(false); // Default to false
  const { authUser } = useAuthContext();

  useEffect(() => {
    const checkIfLiked = async () => {
      if (!authUser) {
        // If authUser is null, set hasLiked to false and stop loading
        setHasLiked(false);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post("/api/colleges/checkliked", {
          userId: authUser.id,
          collegeId,
        });

        setHasLiked(response.data.hasLiked);
      } catch (error: any) {
        console.error("Error in UseLikeCollegeCheck hook ");
        ErrorToast(error.message);
      } finally {
        setLoading(false);
      }
    };

    checkIfLiked();
  }, [authUser, collegeId]);

  return { hasLiked, loading };
};

export default UseLikeCollegeCheck;
