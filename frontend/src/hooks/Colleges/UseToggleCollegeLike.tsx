import axios from "axios";
import { useAuthContext } from "@/contexts/useAuthContext";
import ErrorToast from "@/components/Toasts/ErrorToast";

const UseToggleLike = (collegeId: string, hasLiked: boolean) => {
  const { authUser } = useAuthContext();

  const toggleLike = async () => {
    try {
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
    }
  };

  return { toggleLike };
};

export default UseToggleLike;
