import { Comment } from "@/hooks/Posts/UseGetSinglePost";
import CommentCard from "@/components/Comments/CommentCard";

const CommentSection = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-5">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentCard key={comment.createdAt} comment={comment} />
        ))
      ) : (
        <p className="text-center text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentSection;
