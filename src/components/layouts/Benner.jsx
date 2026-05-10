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
import PlTee1 from "/src/assets/plTee1.png";


//  Topproduct  (image LEFT, info RIGHT)
const Topproduct = ({ productImg, productTitle, productDesription, productPrice,}) => {
  return (
    <div className="mt-35 px-5 border-2 border-white/10  rounded-[151px] bg-white/5 backdrop-blur-md relative ">
      <div className="flex items-center justify-between">
        {/* Image */}
        <div className="w-500 ">
          <Images imgSrc={productImg} className={"absolute bottom-5 left-5"} />
        </div>
        {/* Info */}
        <div className="py-21 flex-1 ">
          <h4 className="text-[38px] font-semibold">{productTitle}</h4>
          <p className="text-[20px] w-[700px] py-6">{productDesription}</p>
          <p className="text-[38px] font-semibold pb-6">{productPrice}</p>
          <div className="flex gap-x-8">
            <div>
              <Button btnText={"Explore"} />
            </div>
            <div className="border-2 p-3.5 rounded-xl cursor-pointer">
              <IoBagHandleSharp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


//  Buttomproduct  (info LEFT, image RIGHT)
const Buttomproduct = ({ productImg, productTitle, productDesription, productPrice ,className }) => {
  return (
    <div className="mt-50 px-28 border-2 border-white/10 p-8 rounded-[151px] bg-white/5 backdrop-blur-md relative ">
      <div className="flex items-center justify-between">
        {/* Info */}
        <div className="py-15">
          <h4 className="text-[38px] font-semibold">{productTitle}</h4>
          <p className="text-[20px] w-[700px] py-6">{productDesription}</p>
          <p className="text-[38px] font-semibold pb-6">{productPrice}</p>
          <div className="flex gap-x-8">
            <div>
              <Button btnText={"Explore"} />
            </div>
            <div className="border-2 p-3.5 rounded-xl cursor-pointer">
              <IoBagHandleSharp />
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-[350px] ">
          <Images imgSrc={productImg} className={"absolute bottom-5 right-20"} />
        </div>
      </div>
    </div>
  );
};


//  Benner  (main component)
const Benner = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/bg_home.png')] bg-center bg-cover bg-no-repeat py-5">
        <Container>

          {/* ── Hero Text ── */}
          <div className="pt-[171px]">
            <h1 className="text-[118px] text-[#c6c8c5] font-semibold leading-none tracking-tight">
              Breath Natural
            </h1>
            <p className="text-[#c6c8c5] text-2xl font-medium w-[880px] pb-5 opacity-90 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-x-9">
              <Button btnText={"Explore"} className={"text-[#c6c8c5]"} />
              <Link to={""} className="flex items-center gap-x-3 text-[#c6c8c5]">
                <Images imgSrc={PlayBtn} />
              </Link>
            </div>
          </div>

          {/* ── Hero Cards Row ── */}
          <div className="flex justify-between items-end mb-20 mt-40 gap-6">

            {/* Review Card */}
            <div className="mt-20 w-[409px] border-2 border-white/10 py-11 px-9 rounded-[45px] bg-white/5 backdrop-blur-md flex-shrink-0">
              <div className="flex items-center gap-x-7 pb-7">
                <Images imgSrc={ReveiwOne} className="w-[58px] h-[58px] rounded-full object-cover" />
                <div>
                  <p className="text-[22px]">Zila</p>
                  <Images imgSrc={Start} />
                </div>
              </div>
              <p className="opacity-75 font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>

            

            {/* Calathea Product Card */}
            <div className="w-[370px] flex-shrink-0">
              <Blurdiv className={"pt-56"}>
                <div className="pl-8 relative">
                  <Images
                    imgSrc={Tree1}
                    className={"absolute bottom-52 right-4 w-full object-contain"}
                  />
                  <p className="text-2xl font-light opacity-75">
                    Trendy House Plant
                  </p>
                  <p className="opacity-75 text-[38px] my-5">Calathea plant</p>
                  <div className="flex items-center justify-between pr-4">
                    <Button btnText={"Buy Now"} />
                    <FaAngleRight />
                  </div>
                  {/* Slide dots */}
                  <div className="flex gap-2 mt-5">
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
            <div className="text-center mb-16 flex justify-center">
              <div className="relative inline-block">
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#abffb3aa] rounded-bl-[20px]" />
                <h2 className="text-[55px] font-semibold px-5">
                  Our Trendy plants
                </h2>
              </div>
            </div>

            {/* Top Product — image left */}
            <Topproduct
            
              productImg={Tree2}
              productTitle={"For Small Decs Ai Plat"}
              productDesription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              }
              productPrice={"Rs. 599/-"}
            />

            {/* Bottom Product — image right */}
            <Buttomproduct
              productImg={Tree3}
              productTitle={"For Fresh Decs Ai Plat"}
              productDesription={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
              }
              productPrice={"Rs. 579/-"}
            />

            {/* Slide dots */}
            <div className="flex justify-center gap-2 mt-10">
              <div className="w-7 h-[6px] rounded-full bg-white/65" />
              <div className="w-[10px] h-[6px] rounded-full bg-white/25" />
              <div className="w-[10px] h-[6px] rounded-full bg-white/25" />
            </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default Benner;