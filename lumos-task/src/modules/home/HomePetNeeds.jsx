import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import catWallpaper from "../../assets/cat-wallpaper.png";
import dogsLover from "../../assets/Dogs Lover.png";
import Birds from "../../assets/Birds.png";
import { Carousel } from "react-responsive-carousel";
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

      <div className="homePetneed-child2">
        <Carousel>
          <div>
            <img src={catWallpaper} alt="catWallpaper" />
            <p className="legend">catWallpaper</p>
          </div>
          <div>
            <img src={dogsLover} />
            <p className="legend">dogsLover</p>
          </div>
          <div>
            <img src={Birds} />
            <p className="legend">Birds</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePetNeeds;
