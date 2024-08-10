import { useUpvoteStatus } from "@/hooks/Posts/UseCheckUpvote";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const UpvoteButton = ({
  postId,
  upvoteLength,
}: {
  postId: string;
  upvoteLength: number;
}) => {
  const { hasUpvoted, loading, error } = useUpvoteStatus({ postId });
  const [btnClass, setBtnClass] = useState<string>("btn-outline");

  useEffect(() => {
    if (loading) {
      // Optionally handle the loading state
    }
    if (error) {
      // Optionally handle the error state
    }
    setBtnClass(hasUpvoted ? "btn-primary" : "btn-outline");
  }, [hasUpvoted, loading, error]);

  return (
    <button className={`btn ${btnClass} flex flex-row gap-4`}>
      <div>
        <MdOutlineKeyboardArrowUp />
      </div>
      <div>{upvoteLength}</div>
    </button>
  );
};

export default UpvoteButton;
