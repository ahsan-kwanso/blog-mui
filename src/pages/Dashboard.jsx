import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Box, Pagination } from "@mui/material";
import Header from "../components/Header";
import PostList from "../components/PostList";
import NavigationTabs from "../components/NavigationTabs";
import useFetchPosts from "../hooks/useFetchPosts";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 6;

  const { posts, total, isLoading } = useFetchPosts(page, limit);
  const handlePageChange = (event, value) => {
    setSearchParams({ page: value, limit });
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            padding: { xs: 0, sm: 4 }, // Zero padding on extra-small screens, padding 4 on small screens and above
          }}
        >
          <NavigationTabs />
          <PostList posts={posts} isLoading={isLoading} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              mb: 5,
            }}
          >
            <Pagination
              count={Math.ceil(total / limit)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              sx={{ mb: { xs: 4, sm: 2 } }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
