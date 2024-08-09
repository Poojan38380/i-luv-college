import ErrorToast from "@/components/Toasts/ErrorToast";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

const UseLikeCollegeCheck = (collegeId: string) => {
  const [loading, setLoading] = useState(true);
  const [hasLiked, setHasLiked] = useState<boolean | null>(null);
  const { authUser } = useAuthContext();

  useEffect(() => {
    const checkIfLiked = async () => {
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
