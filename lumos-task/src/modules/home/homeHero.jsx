import React from "react";
import backgroundImage from "../../assets/heroSection.png";
import "./Home.css";

const HomeHero = () => {
  return (
    <div
      className=" homeHero-cont relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-y-0 left-0">
        <div className="text-black">
          <h3>The only thing you nedd is all here</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
