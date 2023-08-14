import React, { useState } from 'react';
import '../styles/main.css';

const BlogComponent = ({ onPostAdded }) => {
  const [posts, setPosts] = useState([]);
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = () => {
    if (topic && description) {
      const newPost = {
        topic,
        description,
        timestamp: new Date().toLocaleString(),
      };

      setPosts([newPost, ...posts]);
      setTopic('');
      setDescription('');

      onPostAdded();
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setDescription(value);
    }
  };

  return (
    <div className="blog-component">
      <h2>Write a New Post</h2>
      <div className="post-form">
        <input
          type="text"
          placeholder="Enter topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <p>Characters remaining: {200 - description.length}</p>
        <button onClick={handlePost}>Post</button>
      </div>
      <br></br>
      <h2>Recent Posts</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <h3>{post.topic}</h3>
            <p className="post-content">{post.description}</p>
            <p className="timestamp">Posted at: {post.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;

