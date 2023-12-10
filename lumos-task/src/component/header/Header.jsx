import React from "react";
import pet_foot_logo from "../../assets/Logo_Petfood.png";
import "./Header.css";
import { FaChevronDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="header-main flex md:pl-8 md:pt-4 md:pb-4 xl:pl-20 xl:pr-0 xl:py-4 lg:pl-20 lg:pr-0 lg:py-4 2xl:pl-20 2xl:pr-0 2xl:py-4">
      <div className="flex header-left  lg:gap-20 xl:gap-20 2xl:gap-20 md:gap-5">
        {/* PET FOOD LOGO */}
        <div className="petFood-logo-cont w-24 h-13 cursor-pointer">
          <img src={pet_foot_logo} alt="logo" />
        </div>
        {/* HEADER DROPDOWN */}
        <div className="header-dropDown flex lg:gap-10 xl:gap-10 2xl:gap-10 justify-center items-center md:gap-5 ">
          <div className="petsFood-dropdown">
            <p className="text-black font-medium font-semibold flex gap-3 cursor-pointer">
              Pets Food <FaChevronDown className="mt-1" />
            </p>
          </div>
          <div className="accessories-dropdown">
            <p className="text-black font-medium font-semibold flex gap-3 cursor-pointer">
              Accessories <FaChevronDown className="mt-1" />
            </p>
          </div>
        </div>
      </div>

      <div className="header-right flex lg:gap-10 xl:gap-10 2xl:gap-10 md:gap-5">
        {/* SEARCH BOX */}

        <div className="relative w-2/4 bg-gray-200 border rounded">
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-5.2-5.2"></path>
              <circle cx="10" cy="10" r="7"></circle>
            </svg>
          </span>
          <input
            placeholder="Search For Product"
            className="w-full bg-gray-200 py-2 pl-10 focus:outline-none"
          />
        </div>
        <div className="right-child-cont flex lg:gap-10 xl:gap-10 2xl:gap-10 md:gap-5 justify-center items-center">
          <div className="fav-cont w-8 h-8 border flex justify-center rounded-full items-center cursor-pointer bg-gray-200">
            <CiHeart />
          </div>
          <div className="acount-cont w-8 h-8 border flex justify-center rounded-full items-center cursor-pointer bg-gray-200">
            <VscAccount />
          </div>
          {/* <div className="cart-cont w-8 h-8 border flex justify-center rounded-full items-center cursor-pointer bg-gray-200">
            <IoBagOutline />
          </div> */}
          <div className="relative cart-cont w-8 h-8 border flex justify-center rounded-full items-center cursor-pointer bg-gray-200">
            <div className="headerMobile-cart flex justify-center items-center w-10">
              <IoBagOutline />
            </div>

            <div className="absolute top-[-5px] right-[-5px] bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
