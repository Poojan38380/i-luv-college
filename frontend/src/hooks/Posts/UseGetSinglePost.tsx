import ErrorToast from "@/components/Toasts/ErrorToast";
import { useEffect, useState } from "react";

export type Comment = {
  content: string;
  createdAt: string;
  user: {
    username: string;
    profilePicLink: string;
  };
};

export type SinglePost = {
  id: string;
  postTitle: string;
  postDescription: string;
  createdAt: string;
  username: string;
  profilePicLink: string;
  collegeName: string;
  collegeId: string;
  upvotes: number;
  comments: Comment[];
};

const UseGetSinglePost = ({ postId }: { postId: string }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<SinglePost>();

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/posts/single/${postId}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setPost(data);
      } catch (error: any) {
        console.error("Error in UseGetSinglePost hook ");

        ErrorToast(error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, []);

  return { loading, post };
};

export default UseGetSinglePost;
