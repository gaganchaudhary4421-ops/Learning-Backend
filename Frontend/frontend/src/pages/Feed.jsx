import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      caption: "This is a sample caption",
      image: "https://via.placeholder.com/150",
    },
  ]);
  return <section className="feed-section"></section>;
};

export default Feed;
