import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";

import Container from "../Container";
import Button from "../Button";
import Images from "../Images";
import Blurdiv from "../Blurdiv";

import ReveiwOne from "/src/assets/reviewImg1.png";
import Tree1 from "/src/assets/tree1.png";
import Tree2 from "/src/assets/tree2.png";
import Tree3 from "/src/assets/tree3.png";
import Start from "/src/assets/Start.png";
import PlayBtn from "/src/assets/playBtn.png";


// Topproduct (image LEFT, info RIGHT)
const Topproduct = ({ productImg, productTitle, productDesription, productPrice }) => {
  return (
    <div className="mt-10 md:mt-20 lg:mt-35 px-4 md:px-8 lg:py-3 border-2 border-white/10 rounded-[60px] md:rounded-[100px] lg:rounded-[151px] bg-white/5 backdrop-blur-md relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Image */}
        <div className="w-full md:w-[300px] lg:w-[500px] flex justify-center md:block">
          <Images
            imgSrc={productImg}
            className={"md:absolute md:bottom-5 md:left-5 w-48 md:w-64 lg:w-auto "}
          />
        </div>
        {/* Info */}
        <div className="py-8  md:py-14 lg:py-21 lg:pl-[180px] flex-1  md:text-left">
          <h4 className="text-2xl md:text-3xl lg:text-[38px] font-semibold">{productTitle}</h4>
          <p className="text-base md:text-lg lg:text-[20px]   py-4 md:py-6 ">
            {productDesription}
          </p>
          <p className="text-2xl md:text-3xl lg:text-[38px] font-semibold pb-4 md:pb-6">{productPrice}</p>
          <div className="flex gap-x-5 md:gap-x-8 justify-center md:justify-start">
            <Button btnText={"Explore"} />
            <div className="border-2 p-3 md:p-3.5 rounded-xl cursor-pointer">
              <IoBagHandleSharp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// Buttomproduct (info LEFT, image RIGHT)
const Buttomproduct = ({ productImg, productTitle, productDesription, productPrice }) => {
  return (
    <div className="mt-10 md:mt-20 lg:mt-50 px-4 md:px-14 lg:px-28 border-2 border-white/10 p-6 md:p-8 rounded-[60px] md:rounded-[100px] lg:rounded-[151px] bg-white/5 backdrop-blur-md relative">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Info */}
        <div className="py-6 md:py-10 lg:py-15 text-center md:text-left">
          <h4 className="text-2xl md:text-3xl lg:text-[38px] font-semibold">{productTitle}</h4>
          <p className="text-base md:text-lg lg:text-[20px] w-full max-w-[700px] py-4 md:py-6 mx-auto md:mx-0">
            {productDesription}
          </p>
          <p className="text-2xl md:text-3xl lg:text-[38px] font-semibold pb-4 md:pb-6">{productPrice}</p>
          <div className="flex gap-x-5 md:gap-x-8 justify-center md:justify-start">
            <Button btnText={"Explore"} />
            <div className="border-2 p-3 md:p-3.5 rounded-xl cursor-pointer">
              <IoBagHandleSharp />
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full md:w-[280px] lg:w-[350px] flex justify-center md:block">
          <Images
            imgSrc={productImg}
            className={"md:absolute md:bottom-5 md:right-20 w-48 md:w-64 lg:w-auto object-contain"}
          />
        </div>
      </div>
    </div>
  );
};


// Benner (main component)
const Benner = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/bg_home.png')] bg-center bg-cover bg-no-repeat py-5">
        <Container>

          {/* ── Hero Text ── */}
          <div className="pt-26 md:pt-24 lg:pt-[171px]">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[118px] text-[#c6c8c5] font-semibold leading-none tracking-tight">
              Breath Natural
            </h1>
            <p className="text-[#c6c8c5] text-base sm:text-lg md:text-xl lg:text-2xl font-medium w-full max-w-[880px] pb-5 opacity-90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-x-6 md:gap-x-9">
              <Button btnText={"Explore"} className={"text-[#c6c8c5]"} />
              <Link to={""} className="flex items-center gap-x-3 text-[#c6c8c5]">
                <Images imgSrc={PlayBtn} />
              </Link>
            </div>
          </div>

          {/* Hero Cards  */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-20 mt-16 md:mt-28 lg:mt-40 gap-8 md:gap-6">

            {/* Review Card */}
            <div className="w-full md:w-[409px] border-2 border-white/10 py-8 md:py-11 px-6 md:px-9 rounded-[35px] md:rounded-[45px] bg-white/5 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-x-5 md:gap-x-7 pb-5 md:pb-7">
                <Images
                  imgSrc={ReveiwOne}
                  className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full object-cover"
                />
                <div>
                  <p className="text-lg md:text-[22px]">Zila</p>
                  <Images imgSrc={Start} />
                </div>
              </div>
              <p className="opacity-75 font-light leading-relaxed text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>

            {/* Calathea Product Card */}
            <div className=" py-20 lg:py-0 w-full md:w-[370px] shrink-0">
              <Blurdiv className={"pt-40 md:pt-56"}>
                <div className="pl-5 md:pl-8 relative">
                  <Images
                    imgSrc={Tree1}
                    className={"absolute bottom-45 md:bottom-52 right-2 md:right-4 w-full object-contain"}
                  />
                  <p className="text-lg md:text-2xl font-light opacity-75">
                    Trendy House Plant
                  </p>
                  <p className="opacity-75 text-2xl md:text-[38px] my-3 md:my-5">Calathea plant</p>
                  <div className="flex items-center justify-between pr-3 md:pr-4">
                    <Button btnText={"Buy Now"} />
                    <FaAngleRight />
                  </div>
                  {/* Slide dots */}
                  <div className="flex gap-2 mt-4 md:mt-5">
                    <div className="w-6 h-[5px] rounded-full bg-white/70" />
                    <div className="w-3 h-[5px] rounded-full bg-white/25" />
                    <div className="w-3 h-[5px] rounded-full bg-white/25" />
                  </div>
                </div>
              </Blurdiv>
            </div>

          </div>

          {/* ── Trendy Plants Section ── */}
          <div className="mb-10">

            {/* Section Title */}
            <div className="text-center mb-10 md:mb-16 flex justify-center">
              <div className="relative inline-block">
                <div className="absolute top-0 right-0 w-10 md:w-16 h-10 md:h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]" />
                <div className="absolute bottom-0 left-0 w-10 md:w-16 h-10 md:h-16 border-b-4 border-l-4 border-[#abffb3aa] rounded-bl-[20px]" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold px-5">
                  Our Trendy plants
                </h2>
              </div>
            </div>

            {/* Top Product */}
            <Topproduct
              productImg={Tree2}
              productTitle={"For Small Decs Ai Plat"}
              productDesription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              }
              productPrice={"Rs. 599/-"}
            />

            {/* Bottom Product */}
            <Buttomproduct
              productImg={Tree3}
              productTitle={"For Fresh Decs Ai Plat"}
              productDesription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              }
              productPrice={"Rs. 579/-"}
            />

            {/* Slide dots */}
            

          </div>
        </Container>
      </div>
    </>
  );
};

export default Benner;