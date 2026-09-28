import React from "react";
import axios from "axios";

const CreatePost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post("http://localhost:3000/posts", formData);

      console.log(res.data);

      e.target.reset();
    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />

        <input
          type="text"
          name="caption"
          placeholder="Enter Caption"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreatePost;
