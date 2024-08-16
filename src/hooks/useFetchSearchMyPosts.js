// src/hooks/useSearchPosts.js
import { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";
import { useError } from "./useError";

const useFetchSearchMyPosts = (title, page, limit) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [error, setError] = useError();
  const [total, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/posts/me/search", {
          params: { title, page, limit },
        });
        setPosts(response.data.posts);
        setTotalPosts(response.data.total);
        setNextPage(response.data.nextPage);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    if (title) {
      fetchPosts();
    }
  }, [title, page, limit, setError]);

  return { posts, nextPage, isLoading, error, total };
};

export default useFetchSearchMyPosts;
