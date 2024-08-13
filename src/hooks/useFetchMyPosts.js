import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import { useError } from "./useError";

const useFetchPosts = (page, limit) => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useError();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 400));

        const response = await axiosInstance.get(
          `/posts/me?page=${page}&limit=${limit}`
        );
        const { posts, total, nextPage } = response.data;
        setPosts(posts);
        setTotal(total);
        setNextPage(nextPage);
      } catch (err) {
        setError("Failed to Load posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page, limit]);

  return { posts, total, nextPage, isLoading, error };
};

export default useFetchPosts;
