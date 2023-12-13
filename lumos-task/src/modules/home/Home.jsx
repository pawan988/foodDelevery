import React from "react";
import "./Home.css";
import HomeHero from "./homeHero";
import HomeFav from "./HomeFav";
import HomeOrganic from "./HomeOrganic";
import HomePetNeeds from "./HomePetNeeds";
import BsetSelling from "./BestSelling";
import HomeCard from "./HomeCard";
import Footer from "../../component/footer/Footer";
const Home = () => {
  return (
    <div className="home-main-cont">
      <HomeHero />
      <HomeFav />
      <HomeOrganic />
      <HomePetNeeds />
      <BsetSelling />
      <HomeCard />
      <Footer />
    </div>
  );
};

export default Home;
