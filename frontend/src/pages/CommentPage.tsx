import { useParams } from "react-router-dom";

const CommentPage = () => {
  const { postId } = useParams<{ postId: string }>();

  if (!postId) return <div>Invalid Id</div>;
  return <div className="min-h-screen px-10 mq725:px-5 py-24">{postId}</div>;
};

export default CommentPage;
