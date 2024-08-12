import { SinglePost } from "@/hooks/Posts/UseGetSinglePost";
import UpvoteButton from "../Posts/UpvoteButton";

const CommentHeroPostCard = ({ post }: { post: SinglePost }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card w-full  ">
      <div className="card-body p-0 mb-2 ">
        <div className="flex flex-row gap-5  mq500:gap-4  mb-5  ">
          <div className="card-actions ">
            <UpvoteButton postId={post.id} initialUpvoteLength={post.upvotes} />
          </div>

          <div>
            <h2 className="card-title font-bold text-2xl mq450:text-xl">
              {post.postTitle}
            </h2>
            <div className="mt-2 ">{post.postDescription}</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm   text-gray-500">
          <div className="avatar">
            <div className="w-6 rounded-full">
              <img src={post.profilePicLink} alt="Profile" />
            </div>
          </div>
          <div>{post.username}</div>
          <div> • </div>
          <div>{formattedDate}</div>
          <div> • </div>
          <div>{post.collegeName}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentHeroPostCard;
