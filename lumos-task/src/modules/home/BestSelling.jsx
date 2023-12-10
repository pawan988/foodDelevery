import React from "react";
import activeFood from "../../assets/activeFood.png";
import chicken from "../../assets/chicekn.png";
import petFoodVag from "../../assets/petFoodVag.png";
import dogFood from "../../assets/Package-Design-Ellen-Degneres-7 1.png";
import rawChicken from "../../assets/raw-chicken.png";
const BsetSelling = () => {
  const cardArr = [
    {
      image: activeFood,
      rating: "",
      price: "",
    },
    {
      image: chicken,
      rating: "",
      price: "",
    },
    {
      image: petFoodVag,
      rating: "",
      price: "",
    },
    {
      image: dogFood,
      rating: "",
      price: "",
    },
    {
      image: rawChicken,
      rating: "",
      price: "",
    },
    {
      image: activeFood,
      rating: "",
      price: "",
    },
    {
      image: chicken,
      rating: "",
      price: "",
    },
    {
      image: rawChicken,
      rating: "",
      price: "",
    },
  ];
  return (
    <div className="homeBestSelling-container">
      <div className="homeBestSelling-heading-cont">
        <p className="font-poppins font-medium text-base leading-6 text-gray-400">
          best from our clients review
        </p>
        <p className="font-poppins font-medium text-2xl leading-11">
          Best Selling Product Of The Month
        </p>
      </div>
      <div className="homeBestSelling-main overflow-auto">
        <div className="homeBestSelling-wraper flex">
          <div className="homeBestSelling md:flex lg:flex xl:flex 2xl:flex gap-3 lg:gap-3 xl:gap-3 2xl:gap-3 gap-2 flex">
            {cardArr?.map((items, index) => {
              return (
                <div
                  key={index}
                  className="bestSelling-card-main flex flex-col justify-center gap-5 items-center"
                >
                  <div className="bestSelling-card-img-cont">
                    <img src={items?.image} alt="img" />
                  </div>
                  <div className="bestSelling-card-child-cont">
                    <div className="bestSelling-card-rating">
                      <p>Rating</p>
                    </div>
                    <div className="bestSelling-card-summery text-center">
                      <p className="font-poppins font-semibold text-base leading-6 text-black">
                        Homestead Turkey & Ancient Grains Dry Dog Food
                      </p>
                    </div>
                    <div className="bestSelling-card-price">
                      <p className="font-poppins font-semibold text-xl leading-6">
                        $35.99 -
                        <span className="bestSelling-card-price line-through ml-1 text-gray-500">
                          $42.99
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BsetSelling;
