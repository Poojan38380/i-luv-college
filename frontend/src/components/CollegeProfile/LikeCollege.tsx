import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import UseLikeCollegeCheck from "@/hooks/Colleges/UseLikeCollegeCheck";
import UseToggleLike from "@/hooks/Colleges/UseToggleCollegeLike";
import { Loader } from "lucide-react";

const LikeCollege = ({
  collegeId,
  collegeLikes,
}: {
  collegeId: string;
  collegeLikes: number;
}) => {
  const { hasLiked, loading } = UseLikeCollegeCheck(collegeId);
  const { toggleLike } = UseToggleLike(collegeId, hasLiked!);

  if (loading) {
    return (
      <div className="animate-spin">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={toggleLike}
        className={`text-4xl ${
          hasLiked ? "text-primary" : "text-gray-400"
        } transition-colors duration-200 ease-in-out `}
      >
        {hasLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <span className="text-lg font-semibold">{collegeLikes}</span>
    </div>
  );
};

export default LikeCollege;
