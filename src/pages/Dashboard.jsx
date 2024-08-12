// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Pagination } from "@mui/material";
import Header from "../components/Header";
import PostList from "../components/PostList";
import NavigationTabs from "../components/NavigationTabs";
// Sample posts data
const mockPosts = [
  {
    id: 1,
    author: "Alice",
    image: "nature.jpeg",
    title: "Nature's Beauty",
    content:
      "Explore the breathtaking beauty of nature through this stunning post. Nature has always fascinated people with its tranquil beauty and diverse wildlife. In this post, we delve into various natural landscapes, from lush forests to serene lakes.",
    date: "2024-08-01",
  },
  {
    id: 2,
    author: "Bob",
    image: "space.jpeg",
    title: "Exploring the Cosmos",
    content:
      "Dive into the mysteries of the universe with this insightful post. The cosmos offers an endless array of phenomena, from black holes to distant galaxies. Join us as we explore these wonders and uncover the secrets of space.",
    date: "2024-08-02",
  },
  {
    id: 3,
    author: "Charlie",
    image: "health.jpeg",
    title: "Health and Wellness Tips",
    content:
      "Discover essential tips for maintaining a healthy lifestyle in this post. Good health is crucial for a fulfilling life, and in this article, we provide practical advice on nutrition, exercise, and mental well-being.",
    date: "2024-08-03",
  },
  {
    id: 4,
    author: "Diana",
    image: "football.jpeg",
    title: "Football Strategies",
    content:
      "Learn about advanced football strategies and techniques in this informative post. Football is a game of strategy and skill, and we break down key tactics used by professional teams to achieve success on the field.",
    date: "2024-08-04",
  },
  {
    id: 5,
    author: "Eve",
    image: "egypt.jpeg",
    title: "Journey Through Egypt",
    content:
      "Embark on a virtual tour of Egypt and uncover its rich history in this post. Egypt is home to some of the world's most famous archaeological sites, including the Pyramids of Giza and the Sphinx. This article explores the significance of these ancient wonders.",
    date: "2024-08-05",
  },
  {
    id: 6,
    author: "Frank",
    image: "history.jpeg",
    title: "Historical Insights",
    content:
      "Explore key moments in history and their impact on the present in this post. History shapes our world in profound ways, and this article highlights important events and figures that have influenced modern society.",
    date: "2024-08-06",
  },
  {
    id: 7,
    author: "Grace",
    image: "nature.jpeg",
    title: "Nature Wonders",
    content:
      "A closer look at the wonders of nature and its impact on human life. From majestic mountains to vibrant ecosystems, nature offers countless marvels that inspire and rejuvenate. This post examines these wonders and their significance.",
    date: "2024-08-07",
  },
  {
    id: 8,
    author: "Hank",
    image: "space.jpeg",
    title: "Cosmic Discoveries",
    content:
      "An in-depth exploration of recent discoveries in the field of astronomy. The universe is constantly revealing new mysteries, and this post covers the latest breakthroughs and their implications for our understanding of the cosmos.",
    date: "2024-08-08",
  },
  {
    id: 9,
    author: "Ivy",
    image: "history.jpeg",
    title: "Ancient Civilizations",
    content:
      "Uncover the fascinating history of ancient civilizations and their contributions to modern culture. This post delves into the achievements of societies such as the Greeks, Romans, and Egyptians, and their lasting legacies.",
    date: "2024-08-09",
  },
  {
    id: 10,
    author: "Jack",
    image: "health.jpeg",
    title: "Fitness Fundamentals",
    content:
      "Learn about the fundamentals of fitness and how to create an effective workout routine. Fitness is essential for overall health, and this post provides guidance on exercises, routines, and tips for staying motivated.",
    date: "2024-08-10",
  },
];

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setPosts(mockPosts);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Slice the posts for pagination
  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        <Box sx={{ padding: 4 }}>
          <NavigationTabs />
          <PostList posts={paginatedPosts} isLoading={isLoading} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: 2,
              mb: 5,
            }}
          >
            <Pagination
              count={Math.ceil(posts.length / postsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
