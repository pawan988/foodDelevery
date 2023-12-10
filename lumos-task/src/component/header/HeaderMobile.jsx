import React from "react";
import pet_foot_logo from "../../assets/Logo_Petfood.png";
import "./Header.css";
import { IoBag } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";

const HeaderMobile = () => {
  return (
    <div className="headerMain-mobileBView">
      <div className="headertop-wraper flex flex-row justify-between pt-4 pr-6 pl-6 items-center">
        {/* THREE VERTICAL */}
        <div className="headerMobile-logo-cart flex justify-center items-center w-10">
          <Sidebar />
        </div>
        {/* PET LOGO */}
        <div className="headerMobile-logo-cont">
          <img src={pet_foot_logo} alt="logo" />
        </div>
        {/* CART LOGO  */}

        <div className="relative">
          <div className="headerMobile-cart flex justify-center items-center w-10">
            <IoBag style={{ width: "30px", height: "30px" }} />
          </div>

          <div className="absolute top-0 right-0 bg-yellow-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            0
          </div>
        </div>
      </div>
      {/* HEADER SEARCH BAR */}
      <div className="searchBar-container p-3">
        <div className="relative w-2/4 bg-gray-200 border rounded flex justify-center items-center w-full">
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
      </div>
    </div>
  );
};

export default HeaderMobile;
