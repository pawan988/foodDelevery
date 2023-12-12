import React from "react";
import homeCardBackground from "../../assets/homeCardBackground.png";
import freshProduct from "../../assets/freshProduct.png";
import shipment from "../../assets/shipment.png";
import flexibleDelivery from "../../assets/flexibleDelivery.png";
const HomeCard = () => {
  return (
    <div
      className="homecard-container overflow-x-auto"
      style={{ backgroundImage: `url(${homeCardBackground})` }}
    >
      <div className="homecard-wraper flex sm:justify-between md:justify-between lg:justify-between gap-6 ">
        <div className="homeCard-child flex justify-center items-center border border-gray shadow-lg">
          <div className="homecard-card pl-10 sm:pl-0 md:pl-0 lg:pl-0">
            <div className="homeCard-img-cont">
              <div className="homeCard-img">
                <img src={freshProduct} alt="" />
              </div>
            </div>
            <div className="homeCard-heading">
              <h5 className="font-medium text-xl leading-9 text-black-500">
                Fresh Product
              </h5>
            </div>
            <div className="homeCard-text">
              <p className="font-normal text-base leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies turpis proin nulla.
              </p>
            </div>
          </div>
        </div>

        <div className="homeCard-child flex justify-center items-center border border-gray shadow-lg">
          <div className="homecard-card pl-10 sm:pl-0 md:pl-0 lg:pl-0">
            <div className="homeCard-img-cont">
              <div className="homeCardship-img">
                <img src={shipment} alt="" />
              </div>
            </div>
            <div className="homeCard-heading">
              <h5 className="font-medium text-xl leading-9 text-black-500">
                Fresh Product
              </h5>
            </div>
            <div className="homeCard-text">
              <p className="font-normal text-base leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies turpis proin nulla.
              </p>
            </div>
          </div>
        </div>

        <div className="homeCard-child flex justify-center items-center border border-gray shadow-lg">
          <div className="homecard-card pl-10 sm:pl-0 md:pl-0 lg:pl-0">
            <div className="homeCard-img-cont">
              <div className="homeCard-img">
                <img src={flexibleDelivery} alt="" />
              </div>
            </div>
            <div className="homeCard-heading">
              <h5 className="font-medium text-xl leading-9 text-black-500">
                Fresh Product
              </h5>
            </div>
            <div className="homeCard-text">
              <p className="font-normal text-base leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies turpis proin nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
