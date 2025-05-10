import React, { useState } from 'react';
import '../css/Blog.css';
import '../css/SharedStyles.css';
import { BLOG_POSTS } from '../../data/blogData';

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(BLOG_POSTS[0]);

  // Sort blogs by date (newest first)
  const sortedBlogPosts = [...BLOG_POSTS].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-container">
      <div className="blog-content-wrapper">
        <h1 className="page-title">Latest Blogs</h1>
        
        <div className="blog-layout">
          {/* Left side - Blog list */}
          <div className="blog-list">
            {sortedBlogPosts.map((blog) => (
              <div 
                className={`blog-card ${selectedBlog?.id === blog.id ? 'selected' : ''}`} 
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                style={{ position: 'relative', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
              >
                <span className="blog-card-date-pill">{formatDate(blog.date)}</span>
                {blog.category && (
                  <span className="blog-card-category-pill">{blog.category}</span>
                )}
                <div className="blog-card-image-centered" style={{ marginTop: '32px' }}>
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className="blog-card-title-fullwidth">{blog.title}</div>
                <button className="blog-card-readmore-bottomright">Read More <span style={{fontSize: '1.1em', marginLeft: '2px'}}>&rarr;</span></button>
              </div>
            ))}
          </div>

          {/* Right side - Blog detail */}
          <div className="blog-detail-container">
            {selectedBlog && (
              <div className="blog-detail">
                <div className="blog-detail-image">
                  <img src={selectedBlog.image} alt={selectedBlog.title} />
                </div>
                <div className="blog-card-meta">
                  <span className="blog-card-date">
                    {formatDate(selectedBlog.date)}
                  </span>
                  {selectedBlog.category && (
                    <span className="blog-card-category">
                      {selectedBlog.category}
                    </span>
                  )}
                </div>
                <h2>{selectedBlog.title}</h2>
                <div className="blog-detail-content">
                  <p>{selectedBlog.excerpt}</p>
                  {selectedBlog.content.split('\n').map((line, idx) =>
                    line.trim().startsWith('✅') || line.trim().startsWith('-') || line.trim().startsWith('🚀') ? (
                      <div key={idx} style={{ margin: '0.5em 0' }}>{line}</div>
                    ) : line.trim() === '' ? (
                      <br key={idx} />
                    ) : (
                      <p key={idx}>{line}</p>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 