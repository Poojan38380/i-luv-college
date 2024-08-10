import ErrorToast from "@/components/Toasts/ErrorToast";
import { useEffect, useState } from "react";

export type Post = {
  createdAt: string;
  postTitle: string;
  postDescription: string;
  User: {
    username: string;
  };
};

const UseGetPostsByCollege = (collegeId: string) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);

      try {
        const res = await fetch(`/api/posts/college/${collegeId}`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setPosts(data);
      } catch (error: any) {
        console.error("Error in UseGetPostsByCollege hook ");

        ErrorToast(error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return { loading, posts };
};

export default UseGetPostsByCollege;
