import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from "./pages/createPost";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;
