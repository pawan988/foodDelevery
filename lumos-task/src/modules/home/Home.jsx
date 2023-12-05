import React from "react";
import "./Home.css";
import HomeHero from "./homeHero";
import HomeFav from "./HomeFav";
import HomeOrganic from "./HomeOrganic";
const Home = () => {
  return (
    <div className="home-main-cont">
      <HomeHero />
      <HomeFav />
      <HomeOrganic />
    </div>
  );
};

export default Home;
