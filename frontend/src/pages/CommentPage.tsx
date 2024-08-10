import CollegePageSkeleton from "@/components/CollegeProfile/CollegePageSkeleton";
import CommentForm from "@/components/Comments/CommentForm";
import CommentHeroPostCard from "@/components/Comments/CommentHeroPostCard";
import CommentSection from "@/components/Comments/CommentSection";
import UseGetSinglePost from "@/hooks/Posts/UseGetSinglePost";
import { Link, useParams } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";

const CommentPage = () => {
  const { postId } = useParams<{ postId: string }>();

  if (!postId) return <div>Invalid Id</div>;

  const { loading, post } = UseGetSinglePost({ postId });

  if (loading) return <CollegePageSkeleton />;
  if (!post) return <div>No post found</div>;

  return (
    <div className="min-h-screen px-10 mq725:px-5 py-24  ">
      <Link
        to={`/colleges/page/${post.collegeId}`}
        className="flex gap-4 items-center"
      >
        <button className="btn btn-square">
          <RiArrowGoBackLine />
        </button>
        <div className="font-semibold">{post.collegeName}</div>
      </Link>
      <div className="grid grid-cols-2 gap-6 mq800:grid-cols-1 mt-16">
        <div className="flex justify-center mx-auto mq800:mx-0 ">
          <CommentHeroPostCard post={post} />
        </div>
        <div>
          <div className="">
            <CommentForm postId={postId} />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mt-10">Comments</h2>
            <CommentSection comments={post.comments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
