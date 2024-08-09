import axios from "axios";
import { useAuthContext } from "@/contexts/useAuthContext";
import ErrorToast from "@/components/Toasts/ErrorToast";
import { useState } from "react";

const UseToggleLike = (collegeId: string, hasLiked: boolean) => {
  const { authUser } = useAuthContext();
  const [toggling, setToggling] = useState(false);

  const toggleLike = async () => {
    try {
      setToggling(true);
      if (hasLiked) {
        await axios.post(`/api/colleges/unlike`, {
          userId: authUser.id,
          collegeId,
        });
        window.location.reload();
      } else {
        await axios.post(`/api/colleges/like`, {
          userId: authUser.id,
          collegeId,
        });
        window.location.reload();
      }
    } catch (err) {
      ErrorToast("Failed to update like status");
      console.error("Error in UseToggleLike hook ");
    } finally {
      setToggling(false);
    }
  };

  return { toggleLike, toggling };
};

export default UseToggleLike;
