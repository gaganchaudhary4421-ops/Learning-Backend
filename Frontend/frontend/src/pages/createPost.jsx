import React from "react";

const createPost = () => {
  return (
    <div>
      <section className="create-post-section">
        <h1>Create Post</h1>
        <form>
          <input type="file" name="file" accept="image/*" />
          <input type="text" name="caption" required />
          <input type="button" name="submit" value="Submit" />
        </form>
      </section>
    </div>
  );
};

export default createPost;
