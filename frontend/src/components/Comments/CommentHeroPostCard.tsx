import { SinglePost } from "@/hooks/Posts/UseGetSinglePost";
import UpvoteButton from "../Posts/UpvoteButton";
import HorizontalUpvoteButton from "../Posts/HorizontalUpvoteButton";

const CommentHeroPostCard = ({ post }: { post: SinglePost }) => {
  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card w-full  ">
      <div className="card-body p-0 mb-10 ">
        <div className="flex flex-row gap-12  mq500:gap-6 mq450:flex-col-reverse  ">
          <div className="card-actions mq450:hidden">
            <UpvoteButton postId={post.id} initialUpvoteLength={post.upvotes} />
          </div>
          <div className="card-actions hidden mq450:block">
            <HorizontalUpvoteButton
              postId={post.id}
              initialUpvoteLength={post.upvotes}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm mb-3  text-gray-500">
              <div className="avatar">
                <div className="w-7 rounded-full">
                  <img src={post.profilePicLink} alt="Profile" />
                </div>
              </div>
              <div>{post.username}</div>
              <div> • </div>
              <div>{formattedDate}</div>
              <div> • </div>
              <div>{post.collegeName}</div>
            </div>
            <h2 className="card-title font-bold text-2xl">{post.postTitle}</h2>
            <div className="mt-4 ">{post.postDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentHeroPostCard;
