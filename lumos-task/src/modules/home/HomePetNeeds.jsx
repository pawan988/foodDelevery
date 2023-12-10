import React from "react";
import "./Home.css";
import catWallpaper from "../../assets/cat-wallpaper.png";
import dogsLover from "../../assets/Dogs Lover.png";
import Birds from "../../assets/Birds.png";
const HomePetNeeds = () => {
  return (
    <div className="homePetneed-main">
      <div className="homePetneed-child1">
        <div className="homePetneed-heading-main">
          <h1>Everything Your</h1>
          <h3>Pet Needs</h3>
        </div>
        <div className="homePetneed-viewAll">
          <p>View All ---</p>
        </div>
      </div>

      <div className="homePetneed-child2"></div>
    </div>
  );
};

export default HomePetNeeds;
