import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Box, Pagination, Snackbar, Alert } from "@mui/material";
import Header from "../components/Header";
import PostList from "../components/PostList";
import NavigationTabs from "../components/NavigationTabs";
import useFetchPosts from "../hooks/useFetchPosts";
import useFetchSearchPosts from "../hooks/useFetchSearchPosts";

const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 6;
  const searchQuery = searchParams.get("search") || "";

  // Always call both hooks
  const {
    posts: postsSearch,
    total: totalSearch,
    nextPage: nextPageSearch,
    isLoading: isLoadingSearch,
    error: errorSearch,
  } = useFetchSearchPosts(searchQuery, page, limit);
  const {
    posts: postsDefault,
    total: totalDefault,
    nextPage: nextPageDefault,
    isLoading: isLoadingDefault,
    error: errorDefault,
  } = useFetchPosts(page, limit);

  // Determine which data to use based on searchQuery
  const posts = searchQuery ? postsSearch : postsDefault;
  const total = searchQuery ? totalSearch : totalDefault;
  const isLoading = searchQuery ? isLoadingSearch : isLoadingDefault;
  const error = searchQuery ? errorSearch : errorDefault;

  const handlePageChange = (event, value) => {
    const newParams = { page: value, limit };

    // Only add searchQuery if it exists
    if (searchQuery) {
      newParams.search = searchQuery;
    }

    // Update the search params
    setSearchParams(newParams);
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
          {error && (
            <Snackbar open autoHideDuration={6000}>
              <Alert severity="error">{error}</Alert>
            </Snackbar>
          )}
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
