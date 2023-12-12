import React from "react";
import "./Home.css";
import HomeHero from "./homeHero";
import HomeFav from "./HomeFav";
import HomeOrganic from "./HomeOrganic";
import HomePetNeeds from "./HomePetNeeds";
import BsetSelling from "./BestSelling";
import HomeCard from "./HomeCard";
const Home = () => {
  return (
    <div className="home-main-cont">
      <HomeHero />
      <HomeFav />
      <HomeOrganic />
      <HomePetNeeds />
      <BsetSelling />
      <HomeCard />
    </div>
  );
};

export default Home;
