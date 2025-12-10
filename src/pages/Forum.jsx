import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Forum = () => {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "Best practices for React performance optimization",
      author: "CosmicDev",
      replies: 24,
      views: 342,
      lastPost: "2 hours ago"
    },
    {
      id: 2,
      title: "WordPress theme customization tips",
      author: "WebWizard",
      replies: 18,
      views: 210,
      lastPost: "5 hours ago"
    },
    {
      id: 3,
      title: "Node.js vs Python for backend development",
      author: "CodeNinja",
      replies: 42,
      views: 567,
      lastPost: "1 day ago"
    }
  ]);

  const [newThread, setNewThread] = useState({ title: '', content: '' });

  const handleCreateThread = (e) => {
    e.preventDefault();
    if (newThread.title.trim() && newThread.content.trim()) {
      const thread = {
        id: threads.length + 1,
        title: newThread.title,
        author: "CurrentUser",
        replies: 0,
        views: 0,
        lastPost: "Just now"
      };
      setThreads([thread, ...threads]);
      setNewThread({ title: '', content: '' });
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="forum-header">
          <h1 className="page-title">Discussion Forum</h1>
          <Link to="/editor" className="btn">New Thread</Link>
        </div>
        
        <div className="card">
          <h2 className="card-title">Create New Thread</h2>
          <form onSubmit={handleCreateThread}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Thread title"
                className="form-input"
                value={newThread.title}
                onChange={(e) => setNewThread({...newThread, title: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Thread content"
                className="form-textarea"
                rows="4"
                value={newThread.content}
                onChange={(e) => setNewThread({...newThread, content: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="btn">Post Thread</button>
          </form>
        </div>
        
        <div className="card">
          <h2 className="card-title">Recent Threads</h2>
          <div className="threads-list">
            {threads.map(thread => (
              <div key={thread.id} className="thread-item">
                <div className="thread-info">
                  <h3><Link to={`/thread/${thread.id}`}>{thread.title}</Link></h3>
                  <p>By {thread.author}</p>
                </div>
                <div className="thread-stats">
                  <span>{thread.replies} replies</span>
                  <span>{thread.views} views</span>
                  <span>Last post: {thread.lastPost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;