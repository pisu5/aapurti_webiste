// src/pages/Blogs.jsx

import React, { useEffect, useState } from "react";
import { CalendarDays, Tag, User2 } from "lucide-react";

const API_URL = "http://localhost:5000/api/blogs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();

      // If API returns {blogs: []}
      if (data.blogs) {
        setBlogs(data.blogs);
      } else {
        // If API directly returns []
        setBlogs(data);
      }
    } catch (err) {
      console.error(err);
      setError("Unable to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Open Blog
  const openBlog = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Back to All Blogs
  const backToBlogs = () => {
    setSelectedBlog(null);
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading blogs...
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">
        {error}
      </div>
    );
  }

  // Single Blog View
  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md overflow-hidden">

          {/* Cover Image */}
          {selectedBlog.coverImage && (
            <img
              src={selectedBlog.coverImage}
              alt={selectedBlog.featuredImageAlt || selectedBlog.title}
              className="w-full h-[400px] object-cover"
            />
          )}

          <div className="p-8">

            <button
              onClick={backToBlogs}
              className="mb-6 px-4 py-2 bg-black text-white rounded-xl hover:opacity-90 transition"
            >
              ← Back to Blogs
            </button>

            {/* Category */}
            <span className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full mb-4">
              {selectedBlog.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedBlog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm mb-6">

              <div className="flex items-center gap-2">
                <CalendarDays size={16} />
                {new Date(
                  selectedBlog.createdAt || Date.now()
                ).toDateString()}
              </div>

              <div className="flex items-center gap-2">
                <User2 size={16} />
                Admin
              </div>

              <div className="flex items-center gap-2">
                <Tag size={16} />
                {selectedBlog.tags || "General"}
              </div>
            </div>

            {/* Excerpt */}
            {selectedBlog.excerpt && (
              <p className="text-lg text-gray-600 leading-8 mb-8 border-l-4 border-black pl-4 italic">
                {selectedBlog.excerpt}
              </p>
            )}

            {/* Blog Content */}
            <div className="prose max-w-none text-gray-800 leading-8">
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.content,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // All Blogs List
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Latest Blogs
          </h1>

          <p className="text-gray-600 text-lg">
            Explore insights, updates, guides, and industry knowledge.
          </p>
        </div>

        {/* Empty State */}
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No blogs available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
              >

                {/* Cover */}
                {blog.coverImage && (
                  <img
                    src={blog.coverImage}
                    alt={
                      blog.featuredImageAlt || blog.title
                    }
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-6">

                  {/* Category */}
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {blog.category || "General"}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-7 line-clamp-3 mb-5">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  {blog.tags && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {blog.tags
                        .split(",")
                        .map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                          >
                            #{tag.trim()}
                          </span>
                        ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between">

                    <span className="text-sm text-gray-400">
                      {new Date(
                        blog.createdAt || Date.now()
                      ).toDateString()}
                    </span>

                    <button
                      onClick={() => openBlog(blog)}
                      className="px-5 py-2 bg-black text-white rounded-xl hover:opacity-90 transition"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;