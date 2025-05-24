import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/viewposts.css';

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);

  const fetchPosts = async () => {
    const res = await axios.get(`http://localhost:5000/api/posts?skip=${skip}&limit=3`);
    setPosts((prev) => [...prev, ...res.data.posts]);
    setSkip(prev => prev + 3);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="post-feed">
      {posts.map((post, index) => (
        <div className="post-card" key={index}>
          <img src={`http://localhost:5000/${post.imagePath}`} alt="Post" />
          <p><strong>@{post.username}</strong></p>
          <p>{post.description}</p>
          <button className="comment-btn">Comment</button>
        </div>
      ))}
      <button onClick={fetchPosts} className="load-more">Load More</button>
    </div>
  );
};

export default ViewPosts;
