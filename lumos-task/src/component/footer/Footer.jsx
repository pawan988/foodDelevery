import React from "react";
import "./Footer.css";
import footerBackground from "../../assets/footerBackground.png";
import pet_foot_logo from "../../assets/Logo_Petfood.png";
import { MdMailOutline } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="footerMain-cont w-full  bg-cover bg-center mt-8"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="footerContent-wrapper flex mt-14 justify-between ">
        <div className="footerChild1-cont1 mt-24 mb-7 flex flex-col gap-4">
          <div className="footerImg-cont cursor-pointer">
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
          <div className="footerEmail-cont flex gap-4 items-center cursor-pointer">
            <MdMailOutline style={{ fontSize: "25px" }} />
            <p className="font-poppins font-semibold text-lg leading-6 ">
              pawanpatidar137@gmail.com
            </p>
          </div>
          <div className="footermob-cont flex gap-4 items-center cursor-pointer">
            <IoMdCall style={{ fontSize: "25px" }} />
            <p className="font-poppins font-semibold text-lg leading-6 ">
              9109029612
            </p>
          </div>
        </div>
        <div className="footerChild1-cont2 mt-24 mb-7 flex flex-col gap-6">
          <div className="footer2-heading">
            <p className="font-poppins font-medium text-base leading-6">
              Our Service
            </p>
          </div>
          <div className="footer2-text flex flex-col gap-4 ">
            <p className="font-poppins font-large text-base leading-6 cursor-pointer">
              Track order
            </p>
            <p className="font-poppins font-large text-base leading-6 cursor-pointer">
              Returns
            </p>
            <p className="font-poppins font-large text-base leading-6 cursor-pointer">
              Shipping Info
            </p>
            <p className="font-poppins font-large text-base leading-6 cursor-pointer">
              Certificates
            </p>
          </div>
        </div>
        <div className="footerChild1-cont3 mt-24 mb-7 flex flex-col gap-6">
          <div>
            <p className="font-poppins font-medium text-lg text-base leading-6">
              Social Media
            </p>
          </div>
          <div className="footer-social-cont flex justify-between">
            <FaFacebook
              className="cursor-pointer"
              style={{ fontSize: "30px" }}
            />
            <PiInstagramLogoLight
              className="cursor-pointer"
              style={{ fontSize: "30px" }}
            />
            <FaYoutube
              className="cursor-pointer"
              style={{ fontSize: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
