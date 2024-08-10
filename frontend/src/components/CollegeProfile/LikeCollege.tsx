import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import UseLikeCollegeCheck from "@/hooks/Colleges/UseLikeCollegeCheck";
import UseToggleLike from "@/hooks/Colleges/UseToggleCollegeLike";
import { Loader } from "lucide-react";
import { useAuthContext } from "@/contexts/useAuthContext";
import { useNavigate } from "react-router-dom";
import ErrorToast from "../Toasts/ErrorToast";

const LikeCollege = ({
  collegeId,
  collegeLikes,
}: {
  collegeId: string;
  collegeLikes: number;
}) => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/auth/login");
    ErrorToast("Create an Anonymous Account First");
  };

  const { hasLiked, loading } = UseLikeCollegeCheck(collegeId);
  const { toggleLike, toggling } = UseToggleLike(collegeId, hasLiked!);

  if (loading) {
    return (
      <div className="animate-spin">
        <Loader />
      </div>
    );
  }

  if (authUser === null) {
    {
      return (
        <div className="flex flex-col items-center space-y-2">
          <button
            onClick={redirectToLogin}
            className="text-4xl text-gray-400    animate-bounce"
          >
            <AiOutlineHeart />
          </button>
          <span className="text-sm ">Login to see</span>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={toggleLike}
        disabled={toggling}
        className={`text-4xl ${
          hasLiked ? "text-primary" : "text-gray-400 animate-bounce"
        }    `}
      >
        {hasLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <span className="text-lg font-semibold">{collegeLikes}</span>
    </div>
  );
};

export default LikeCollege;
