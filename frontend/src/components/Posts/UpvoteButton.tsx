import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useToggleUpvote } from "@/hooks/Posts/UseToggleUpvote";
import { useUpvoteStatus } from "@/hooks/Posts/UseCheckUpvote";
import { Loader } from "lucide-react";

const UpvoteButton = ({
  postId,
  initialUpvoteLength,
}: {
  postId: string;
  initialUpvoteLength: number;
}) => {
  const { upvoteCount, toggleUpvote, loading, error } = useToggleUpvote({
    postId,
    initialUpvoteCount: initialUpvoteLength,
  });

  const { hasUpvoted: voted, loading: buttonLoading } = useUpvoteStatus(postId);

  return (
    <button
      className={`btn ${
        voted ? "btn-primary" : "btn-outline"
      } flex flex-row gap-4`}
      onClick={toggleUpvote}
      disabled={loading}
    >
      {buttonLoading || loading ? (
        <div className="animate-spin">
          <Loader />
        </div>
      ) : (
        <>
          <div>
            <MdOutlineKeyboardArrowUp />
          </div>
          <div>{upvoteCount}</div>
        </>
      )}

      {error && <div className="text-red-500">{error}</div>}
    </button>
  );
};

export default UpvoteButton;
