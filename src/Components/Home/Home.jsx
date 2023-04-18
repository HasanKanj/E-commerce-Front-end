import React from "react";
import Card from "./FeaturedCars/Card";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <div className="FeaturedCars">
        <h2>Featured Cars:</h2>
        <Card />
      </div>
    </div>
  );
}

export default Home;
