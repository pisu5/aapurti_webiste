import React, { useState } from "react";
import { Container, Box, Button, Chip } from "@mui/material";
import { COLORS } from "../styles/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BLOGS = [
  {
    id: 1,
    title: "How Land Survey Data Improves Crop Yield",
    excerpt:
      "Modern land surveying combined with GIS and AI helps farmers make data-driven decisions that increase productivity.",
    tag: "Agriculture",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    featured: true,
    color: COLORS.brandGreen,
  },
  {
    id: 2,
    title: "Digital Transformation in Agriculture SaaS",
    excerpt:
      "From soil analytics to satellite monitoring, SaaS platforms are redefining precision farming.",
    tag: "Agri-Tech",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    color: COLORS.techBlueGray,
  },
  {
    id: 3,
    title: "Why Accurate Mapping Matters for Smart Farming",
    excerpt:
      "Accurate land mapping reduces risk, optimizes irrigation, and enables scalable farm planning.",
    tag: "Survey & GIS",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    color: COLORS.earthBrown,
  },
];

const Blogs = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Agriculture", "Agri-Tech", "Survey & GIS"];
  const featured = BLOGS.find((b) => b.featured);
  const others = BLOGS.filter((b) => !b.featured);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: COLORS.surface }}>
      {/* ───────── Hero Header ───────── */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${COLORS.brandGreen} 0%, ${COLORS.techBlueGray} 100%)`,
          py: 8,
          color: COLORS.white,
        }}
      >
        <Container maxWidth="lg">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              color: COLORS.white,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Insights & Articles
          </h1>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "50rem",
              lineHeight: 1.7,
            }}
          >
            Expert perspectives on agriculture, land surveying, and modern SaaS
            technologies powering data-driven farm management.
          </p>
        </Container>
      </Box>

      {/* ───────── Content Section ───────── */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          {/* Featured Blog Card (30% + Accent) */}
          {featured && (
            <Box
              onMouseEnter={() => setHoveredId(featured.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{
                marginBottom: 6,
                backgroundColor: COLORS.white,
                border: `2px solid ${featured.color}`,
                borderRadius: "16px",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                transition: "all 0.4s ease",
                boxShadow:
                  hoveredId === featured.id
                    ? `0 16px 40px rgba(47, 107, 79, 0.15)`
                    : "0 2px 8px rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Featured Visual */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${featured.color}20 0%, ${featured.color}40 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "280px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    fontSize: "4rem",
                    opacity: 0.3,
                    textAlign: "center",
                  }}
                >
                  📊
                </Box>
              </Box>

              {/* Featured Content */}
              <Box sx={{ p: 4, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <Chip
                      label={featured.tag}
                      sx={{
                        backgroundColor: `${featured.color}20`,
                        color: featured.color,
                        fontWeight: 600,
                        height: 32,
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: COLORS.textMuted,
                        fontSize: "0.875rem",
                      }}
                    >
                      <AccessTimeIcon sx={{ fontSize: 16 }} />
                      {featured.readTime}
                    </Box>
                  </Box>

                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: COLORS.textPrimary,
                      lineHeight: 1.3,
                      margin: "0 0 1rem 0",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: COLORS.textSecondary,
                      lineHeight: 1.7,
                    }}
                  >
                    {featured.excerpt}
                  </p>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: 4,
                    pt: 3,
                    borderTop: `1px solid ${COLORS.borderLight}`,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: COLORS.textMuted,
                    }}
                  >
                    {featured.date}
                  </span>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: featured.color,
                      color: COLORS.white,
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateX(4px)",
                        boxShadow: `0 6px 16px rgba(0, 0, 0, 0.15)`,
                      },
                    }}
                  >
                    Read Full Article
                  </Button>
                </Box>
              </Box>
            </Box>
          )}

          {/* Category Filter */}
          <Box sx={{ mb: 5, display: "flex", gap: 1.5, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  backgroundColor:
                    activeCategory === cat ? COLORS.brandGreen : COLORS.white,
                  color:
                    activeCategory === cat ? COLORS.white : COLORS.textSecondary,
                  border:
                    activeCategory === cat
                      ? "none"
                      : `1px solid ${COLORS.borderLight}`,
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 3,
                  py: 1.2,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor:
                      activeCategory === cat ? COLORS.brandGreen : COLORS.surface,
                  },
                }}
              >
                {cat}
              </Button>
            ))}
          </Box>

          {/* Blog Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr" },
              gap: 4,
            }}
          >
            {others.map((blog) => (
              <Box
                key={blog.id}
                onMouseEnter={() => setHoveredId(blog.id)}
                onMouseLeave={() => setHoveredId(null)}
                sx={{
                  backgroundColor: COLORS.white,
                  border: `1px solid ${COLORS.borderLight}`,
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  boxShadow:
                    hoveredId === blog.id
                      ? `0 12px 32px rgba(47, 107, 79, 0.12)`
                      : "0 2px 6px rgba(0, 0, 0, 0.05)",
                  transform: hoveredId === blog.id ? "translateY(-6px)" : "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image Placeholder */}
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${blog.color}20 0%, ${blog.color}40 100%)`,
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background: `radial-gradient(circle at ${hoveredId === blog.id ? "60%" : "50%"} ${hoveredId === blog.id ? "60%" : "50%"}, ${blog.color}30, transparent 70%)`,
                      transition: "all 0.4s ease",
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>🌾</span>
                </Box>

                {/* Content */}
                <Box sx={{ p: 3, flex: 1, display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 2,
                    }}
                  >
                    <Chip
                      label={blog.tag}
                      sx={{
                        backgroundColor: `${blog.color}15`,
                        color: blog.color,
                        fontWeight: 600,
                        height: 28,
                      }}
                    />
                  </Box>

                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: COLORS.textPrimary,
                      lineHeight: 1.4,
                      margin: "0 0 0.75rem 0",
                      flex: 1,
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: COLORS.textSecondary,
                      lineHeight: 1.6,
                      margin: "0 0 1.5rem 0",
                      flex: 1,
                    }}
                  >
                    {blog.excerpt}
                  </p>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pt: 2,
                      borderTop: `1px solid ${COLORS.borderLight}`,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: COLORS.textMuted,
                        fontSize: "0.8125rem",
                      }}
                    >
                      <AccessTimeIcon sx={{ fontSize: 14 }} />
                      {blog.readTime}
                    </Box>

                    <button
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: blog.color,
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateX(0)";
                      }}
                    >
                      Read →
                    </button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ───────── Newsletter CTA (Premium Section) ───────── */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${COLORS.brandGreen} 0%, ${COLORS.earthBrown} 100%)`,
          py: 10,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        />

        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <h3
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: COLORS.white,
              margin: "0 0 1rem 0",
              lineHeight: 1.2,
            }}
          >
            Never Miss Industry Updates
          </h3>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.7,
              margin: "0 0 2rem 0",
            }}
          >
            Get expert insights, platform updates, and agri-tech trends delivered
            to your inbox every week.
          </p>

          <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: COLORS.accentPrimary,
                color: COLORS.textPrimary,
                fontWeight: 700,
                textTransform: "none",
                borderRadius: "8px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "1rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: COLORS.accentHover,
                  transform: "translateY(-2px)",
                  boxShadow: `0 8px 20px rgba(212, 160, 23, 0.3)`,
                },
              }}
            >
              Subscribe Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: COLORS.white,
                color: COLORS.white,
                fontWeight: 700,
                textTransform: "none",
                borderRadius: "8px",
                paddingX: 4,
                paddingY: 1.5,
                fontSize: "1rem",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: COLORS.white,
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Blogs;
