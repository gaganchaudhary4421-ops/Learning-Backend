import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://images.unsplash.com/photo-1747096241806-82c763e28744?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D",
      caption: "A beautiful sunset",
    },
  ]);
  return (
    <section className="feed-section">
      posts.length === 0 ? (<p>No posts available.</p>) : (
      {posts.map((post) => (
        <div key={post._id} className="post">
          <img src={post.image} alt="Post" />
        </div>
      ))}
      )
    </section>
  );
};

export default Feed;
