import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
};

export default HomePage;
