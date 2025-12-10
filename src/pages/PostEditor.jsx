import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostEditor = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission
    alert('Post published successfully!');
    navigate('/forum');
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Create New Post</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                className="form-input"
                value={post.title}
                onChange={handleChange}
                placeholder="Enter post title"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Content</label>
              <textarea
                name="content"
                className="form-textarea"
                rows="15"
                value={post.content}
                onChange={handleChange}
                placeholder="Write your post content here..."
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <label className="form-label">Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                className="form-input"
                value={post.tags}
                onChange={handleChange}
                placeholder="e.g. react, javascript, webdev"
              />
            </div>
            
            <div className="editor-actions">
              <button type="button" className="btn" onClick={() => navigate('/forum')}>
                Cancel
              </button>
              <button type="submit" className="btn pulse">
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;