import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "@/contexts/useAuthContext";

interface UseToggleUpvoteParams {
  postId: string;
  initialUpvoteCount: number;
}

interface UseToggleUpvoteResult {
  hasUpvoted: boolean;
  upvoteCount: number;
  toggleUpvote: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const useToggleUpvote = ({
  postId,
  initialUpvoteCount,
}: UseToggleUpvoteParams): UseToggleUpvoteResult => {
  const { authUser } = useAuthContext();
  const [hasUpvoted, setHasUpvoted] = useState<boolean>(false);
  const [upvoteCount, setUpvoteCount] = useState<number>(initialUpvoteCount);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const toggleUpvote = async () => {
    if (!authUser) {
      setError("User must be logged in to upvote");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(`/api/posts/togglevote/${postId}`, {
        userId: authUser.id,
      });

      if (response.data.message === "Upvote added") {
        setHasUpvoted(true);
        setUpvoteCount((prevCount) => prevCount + 1);
      } else {
        setHasUpvoted(false);
        setUpvoteCount((prevCount) => prevCount - 1);
      }
    } catch (err) {
      setError("Failed to toggle upvote");
    } finally {
      setLoading(false);
    }
  };

  return {
    hasUpvoted,
    upvoteCount,
    toggleUpvote,
    loading,
    error,
  };
};
