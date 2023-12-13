import React from "react";
import "./Footer.css";
import footerBackground from "../../assets/footerBackground.png";
import pet_foot_logo from "../../assets/Logo_Petfood.png";
import { MdMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div
      className="footerMain-cont w-full  bg-cover bg-center mt-8"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="footerContent-wrapper flex mt-14 justify-between ">
        <div className="footerChild1-cont1 mt-24 mb-7 flex flex-col gap-4">
          <div className="footerImg-cont">
            <img src={pet_foot_logo} alt="logo" />
          </div>
          <p className="font-poppins font-medium text-base leading-6">
            © 2023 Online Store. All Rights Reserved.
          </p>
          <p className="font-poppins font-normal text-base leading-6">
            Egestas nec etiam maecenas aliquam a, lorem ornare eget non nec
            placerat elit a enim fermentum ac integer eget ante mattis cursus
            purus volutpat
          </p>
          <div className="footerEmail-cont flex gap-4 items-center">
            <MdMailOutline />
            <p className="font-poppins font-semibold text-lg leading-6">
              pawanpatidar137@gmail.com
            </p>
          </div>
          <div className="footermob-cont flex gap-4 items-center">
            <IoMdCall />
            <p className="font-poppins font-semibold text-lg leading-6">
              9109029612
            </p>
          </div>
        </div>
        <div className="footerChild1-cont2 mt-24 mb-7">Medium</div>
        <div className="footerChild1-cont3 mt-24 mb-7">Right</div>
      </div>
    </div>
  );
};

export default Footer;
