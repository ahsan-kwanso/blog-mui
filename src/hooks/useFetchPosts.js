import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

const useFetchPosts = (page, limit) => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [nextPage, setNextPage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(
          `/posts?page=${page}&limit=${limit}`
        );
        const { posts, total, nextPage } = response.data;
        setPosts(posts);
        setTotal(total);
        setNextPage(nextPage);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [page, limit]);

  return { posts, total, nextPage, isLoading, error };
};

export default useFetchPosts;
