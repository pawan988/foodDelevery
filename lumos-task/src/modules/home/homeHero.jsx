import React from "react";
import backgroundImage from "../../assets/heroSection.png";
import furr1 from "../../assets/furr 1.png";
import "./Home.css";

const HomeHero = () => {
  return (
    <div
      className="homeHero-cont flex  w-full  bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-hero-text-main">
        <div className="home-hero-text-cont flex flex-col gap-3 md:gap-6 lg:gap-9 xl:gap-9 2xl:gap-9   ">
          <div className="home-hero-text-cont h-182 flex flex-col gap-3">
            <h1 className="font-poppins font-semibold text-3xl leading-14">
              The only thing you nedd is all here
            </h1>
            <p className="font-poppins font-normal text-sm leading-6">
              Sagittis in et purus euismod lorem nunc varius porta. Semper elit
              porttitor vestibulum, habitant duis arcu sit feugiat diam.
            </p>
          </div>
          <div>
            <button class="border border-solid border-black rounded-full py-2 px-4 bg-black text-white cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="home-hero-child-img flex justify-start items-center invisible xl:visible lg:visible 2xl:visible">
        <div className="furr-img-cont">
          <img src={furr1} alt="Centered Image" className="max-w-full h-70px" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
