import React from "react";
import "./Home.css";
import catFace from "../../assets/Cat Fcae.png";
import dogFace from "../../assets/Dog Fcae.png";
import newBorn from "../../assets/Small Pets Face.png";
import fish from "../../assets/Fish.png";
import bird from "../../assets/Bird.png";
import homeFav1img from "../../assets/pet-accessories-still-life-with-food-bowl-dog-leash 2.png";
import homeFav2img from "../../assets/50e77193-9aba-4c8f-97d3-f0882cefcb01 2.png";
import homeFav3img from "../../assets/Package-Design-Ellen-Degneres-7 1.png";
import homeFav4img from "../../assets/petFoodVag.png";

const HomeFav = () => {
  return (
    <div className="homeFav-main-cont">
      {/* HOME FAV TEXT AND HEADING */}
      <div className="home-text-heading  flex flex-col justify-center items-center pt-10">
        <p className="font-poppins font-medium text-base leading-6 text-gray-400">
          BASED ON VETERINARY DOCTOR’S
        </p>
        <div className="homeFav-h1">
          <h1 className="font-poppins font-medium text-2xl leading-12">
            Some Of Our Favourites To care For Their Whole Health
          </h1>
        </div>
      </div>
      {/* HOME FAV MENU BAR */}
      <div className="homeFav-menu-main overflow-auto">
        <div
          className="homeFav-menu-wraper 
                        lg:border xl:border 2xl:border md:border
                        lg:border-solid xl:border-solid 2xl:border-solid md:border-solid
                        lg:gap-0 xl:gap-0 2xl::gap-0 md::gap-0
                        lg:border-gray-300 xl:border-gray-300 2xl:border-gray-300 md:border-gray-300
                        flex justify-between items-baseline py-3 px-2 md:px-8 lg:px-24 xl:px-24 2xl:px-24 rounded-lg opacity-4 overflow-auto gap-8"
        >
          <div className="homeFav-cat md:flex lg:flex xl:flex 2xl:flex gap-3 cursor-pointer lg:gap-3 xl:gap-3 2xl:gap-3 gap-2">
            <div className="catFace-cont w-6 h-6">
              <img src={catFace} alt="Centered Image" className="" />
            </div>
            <p>CAT</p>
          </div>
          <div
            className="homeFav-dog 
          md:flex lg:flex xl:flex 2xl:flex 
          lg:gap-3 xl:gap-3 2xl:gap-3 gap-2 
          lg:py-4 xl:py-4 2xl:py-4 md:py-4 py-1
          cursor-pointer bg-black rounded-3xl shadow-xl 
          lg:px-20 xl:px-20 2xl:px-20 px-10 "
          >
            <div className="dogFace-cont w-6 h-6">
              <img src={dogFace} alt="Centered Image" className="" />
            </div>
            <p className="text-white">DOG</p>
          </div>
          <div className="homeFav-newBorn md:flex lg:flex xl:flex 2xl:flex gap-3 cursor-pointer lg:gap-3 xl:gap-3 2xl:gap-3 gap-2">
            <div className="dogFace-cont w-6 h-6">
              <img src={newBorn} alt="Centered Image" className="" />
            </div>
            <p>NEW BORN</p>
          </div>
          <div className="homeFav-fish md:flex lg:flex xl:flex 2xl:flex gap-3 cursor-pointer lg:gap-3 xl:gap-3 2xl:gap-3 gap-2">
            <div className="dogFace-cont w-6 h-6">
              <img src={fish} alt="Centered Image" className="" />
            </div>
            <p>FISH</p>
          </div>
          <div className="homeFav-birds md:flex lg:flex xl:flex 2xl:flex gap-3 cursor-pointer lg:gap-3 xl:gap-3 2xl:gap-3 gap-2">
            <div className="dogFace-cont w-6 h-6">
              <img src={bird} alt="Centered Image" className="" />
            </div>
            <p>BIRDS</p>
          </div>
        </div>
      </div>
      {/* HOME FAV PRODUCT LIST */}
      <div className="homeFav-productList-main">
        <div
          className="homeFav-productList-wraper  
        xl:flex xl:justify-between xl:items-center
        2xl:flex 2xl:justify-between 2xl:items-center
        lg:flex lg:justify-between lg:items-center
        
        "
        >
          <div
            className="homeFav-product1 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('${homeFav1img}')` }}
          >
            <div
              className="homeFav1-Text-cont 
            xl:pt-10 xl:pl-5
            2xl:pt-10 2xl:pl-5
            lg:pt-10 lg:pl-5
            md:pt-20 md:pl-12
            pt-10 pl-15
            "
            >
              <p className="font-poppins font-medium text-base leading-6 text-gray-400">
                ACCESSORIES + FOOD COMBO
              </p>
              <h2 className="font-poppins font-medium text-2xl leading-12 mt-1">
                OFCOURSE WE SALE PRODUCT WITH LOVE
              </h2>
              <div>
                <button class="border border-solid border-black rounded-lg py-2 px-4 bg-black text-white cursor-pointer mt-6">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          <div className="homeFav-product2 flex justify-center items-center flex-col rounded-lg ">
            <div className="homeFav-product2-heading text-center font-poppins font-semibold text-base leading-6">
              <h2>PEANUT BUTTER COOKIES</h2>
            </div>

            <div className="homeFav-product2-para text-center font-poppins font-medium text-xs leading-4 tracking-tighter mt-2">
              <p>Lectus commodo pharetra, sit aliquam tristique neque in.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button class="border border-solid border-black rounded-lg py-2 px-4 bg-black text-white cursor-pointer mt-6">
                Order Now
              </button>
              <div className="homeFav3-img-cont pt-10 pl-5 ">
                <img src={homeFav2img} />
              </div>
            </div>
          </div>
          <div
            className="homeFav-product3 
          xl:flex xl:flex-col xl:justify-between
          2xl:flex 2xl:flex-col 2xl:justify-between
          lg:flex lg:flex-row
          md:flex md:flex-col
          "
          >
            <div className="hoomeFav-product3-child1 rounded-lg flex flex-row border border-solid border-gray-300 shadow-md">
              <div className="homeFav-product3-child1">
                <div className="homeFav3-Text-cont pt-10 pl-5 md:pl-6">
                  <p className="font-poppins font-medium text-base leading-6 text-gray-400">
                    Axel & blue
                  </p>
                  <h2 className="font-poppins font-semibold text-base leading-6 mt-1">
                    Made from the real chocolate ingidriant
                  </h2>
                  <div>
                    <button class="border border-solid border-black rounded-lg py-2 px-4 bg-black text-white cursor-pointer mt-6">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="homeFav-product3-child2 flex justify-center items-center">
                <img src={homeFav4img} alt="img1" />
              </div>
            </div>
            <div
              className="hoomeFav-product3-child2 
            rounded-lg flex flex-row border border-solid border-gray-300 shadow-md
            lg:mt-0
            xl:mt-0
            2xl:mt-0 
            mt-5"
            >
              <div className="homeFav-product3-child1">
                <div className="homeFav3-Text-cont pt-10 pl-5 md:pl-6">
                  <p className="font-poppins font-medium text-base leading-6 text-gray-400">
                    Axel & blue
                  </p>
                  <h2 className="font-poppins font-semibold text-base leading-6 mt-1">
                    Made from the real chocolate ingidriant
                  </h2>
                  <div>
                    <button class="border border-solid border-black rounded-lg py-2 px-4 bg-black text-white cursor-pointer mt-6">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="homeFav-product3-child2 flex justify-center items-center">
                <img src={homeFav3img} alt="img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFav;
