import React from "react";
import { Card, CardContent, Typography, Button, Container, Grid, CardMedia } from "@mui/material";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Technology",
    content: "Technology is evolving at an unprecedented rate, impacting every aspect of our lives. From AI-driven automation to blockchain advancements, the digital revolution is transforming industries.",
    date: "February 28, 2025",
    image: "/images/technology.jpg",
  },
  {
    id: 2,
    title: "AI and Machine Learning Innovations",
    content: "Artificial Intelligence and Machine Learning are reshaping businesses. From self-driving cars to chatbots, AI is revolutionizing industries with its predictive analytics and automation capabilities.",
    date: "February 27, 2025",
    image: "/images/ai.jpg",
  },
  {
    id: 3,
    title: "Web Development Trends in 2025",
    content: "Modern web technologies such as Next.js, serverless computing, and progressive web apps (PWAs) are shaping the way we develop applications. User experience and performance remain key priorities.",
    date: "February 26, 2025",
    image: "/images/webdev.jpg",
  },
  {
    id: 4,
    title: "Cybersecurity in the Digital Age",
    content: "With cyber threats on the rise, businesses must invest in cybersecurity measures. Multi-factor authentication, encryption, and AI-driven threat detection are key solutions in 2025.",
    date: "February 25, 2025",
    image: "/images/cybersecurity.jpg",
  },
  {
    id: 5,
    title: "The Rise of Remote Work",
    content: "Remote work has become the new normal. Companies are adopting flexible work models, using cloud-based collaboration tools, and prioritizing work-life balance.",
    date: "February 24, 2025",
    image: "/images/remote.jpg",
  },
  {
    id: 6,
    title: "Blockchain and Cryptocurrency Future",
    content: "Decentralized finance (DeFi) and NFTs are transforming the financial sector. Blockchain ensures secure transactions, and cryptocurrencies continue to gain mainstream adoption.",
    date: "February 23, 2025",
    image: "/images/blockchain.jpg",
  },
];

const Blog = () => {
  return (
    <Container className="blog-container"
    sx={{ 
        width: "80%", 
        position: "absolute", 
        top: "63%", 
        left: "60%", 
        transform: "translate(-50%, -50%)", 
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        textAlign: "center"
      }}>
      <Typography variant="h3" className="blog-title">Latest Blog Posts</Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card className="blog-card">
              <CardMedia component="img" height="200" image={post.image} alt={post.title} />
              <CardContent>
                <Typography variant="h5" className="blog-post-title">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">{post.date}</Typography>
                <Typography variant="body1" className="blog-content">
                  {post.content.substring(0, 120)}...
                </Typography>
                <Button variant="contained" className="read-more">Read More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
