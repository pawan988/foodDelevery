import React from "react";
import "./Home.css";
import organicImg from "../../assets/homeOrg.png";

const HomeOrganic = () => {
  return (
    <div className="homeOrga-main">
      <div className="homeOrg-wrapper lg:flex">
        <div className="homeOrg-right ">
          <div className="imgContOne">
            <img src={organicImg} alt="organicImg" />
          </div>
        </div>
        <div className="homeOrg-left flex flex-col justify-center items-center">
          <div className="homeOrgHeading font-poppins font-bold text-3xl leading-12 text-black mb-6">
            <h1>Dogs do speak, but only to those who know how to listen.</h1>
          </div>
          <div className="homeOrgText font-poppins font-normal text-sm leading-6 text-k-assent mb-14">
            <h1>
              Sweet roll ice cream powder candy canes ice cream donut pudding
              biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
              fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding
              biscuit caramels topb
            </h1>
          </div>
          <div className="flex justify-start items-start border border-solid border-red-500 w-46">
            <button class="border border-solid border-black rounded-full py-2 px-4 bg-black text-white cursor-pointer mt-6">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOrganic;
