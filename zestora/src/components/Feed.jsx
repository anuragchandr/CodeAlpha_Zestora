import React, { useState } from 'react';
import Postupload from './Postupload';
import PostFeed from './PostFeed';
import NavBar from './NavBar';
import '../css/uform.css';

const Feed = () => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="feed-container font-montserrat bg-white min-h-screen" id="feed">
      <NavBar />

      <main className="feed-main">
        {showUpload && (
          <div className="overlay">
            <div className="upload-modal">
              <button className="close-btn" onClick={() => setShowUpload(false)}>✕</button>
              <Postupload />
            </div>
          </div>
        )}

        <div className="postfeed-section">
          <PostFeed />
        </div>
      </main>

      <button className="fab" onClick={() => setShowUpload(true)}>＋</button>
    </div>
  );
};

export default Feed;
