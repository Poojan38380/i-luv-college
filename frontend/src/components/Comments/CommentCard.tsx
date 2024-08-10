import { Comment } from "@/hooks/Posts/UseGetSinglePost";

const CommentCard = ({ comment }: { comment: Comment }) => {
  const formattedDate = new Date(comment.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="card  bg-base-200 text-base-content  ">
      <div className="card-body ">
        <p className="">{comment.content}</p>
        <div className="flex items-center gap-2 text-sm ">
          <div className="avatar">
            <div className="w-7 rounded-full">
              <img src={comment.user.profilePicLink} alt="Profile" />
            </div>
          </div>
          <div>{comment.user.username}</div>
          <div> • </div>
          <div>{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
