import React from "react";
import Conteinar from "../Conteinar";
import Button from "../Button";
import Images from "../Images";
import ReveiwOne from "/src/assets/reviewImg1.png";
import Tree1 from "/src/assets/tree1.png";
import Start from "/src/assets/Start.png";
import PlayBtn from "/src/assets/playBtn.png";
import { Link } from "react-router-dom";
import Blurdiv from "../../Blurdiv";
import { FaAngleRight } from "react-icons/fa6";

const Benner = () => {
  return (
    <>
      <div className="">
        <Conteinar>
          {/* Text Top */}
          <div className="">
            <h1 className="text-[118px] text-[#c6c8c5] font-semibold">
              Breath Natural{" "}
            </h1>
            <p className="text-[#c6c8c5] text-2xl font-medium w-[880px] pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-x-9">
              <Button btnText={"Explore"} className={"text-[#c6c8c5]"} />
              <Link to={""}>
                <Images imgSrc={PlayBtn} />
              </Link>
            </div>
          </div>
          {/* text top End */}
          <div className="flex justify-between mb-48">
            {/* Review Start */}
            <div className="mt-60 w-[409px] border-2 border-white/10  py-11 px-9 rounded-[45px] bg-white/5 backdrop-blur-md ">
              <div className="flex items-center gap-x-7 pb-7.5">
                <Images imgSrc={ReveiwOne} />
                <div className="">
                  <p className="text-[22px]">Zila</p>
                  <Images imgSrc={Start} />
                </div>
              </div>
              <p className="opacity-75 font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
            {/* Review End */}
            {/* Product Top Stert */}
            <div className="w-[400px] ">
              <Blurdiv className={"pt-50"}>
                <div className="pl-8 ">
                  <Images
                    imgSrc={Tree1}
                    className={"absolute bottom-23 right-4"}
                  />
                  <p className="text-2xl font-light opacity-75">
                    Trendy House Plant
                  </p>
                  <p className="opacity-75 text-[38px] my-5">Calathea plant</p>
                  <div className="absolute bottom-25 right-0">
                    <FaAngleRight />
                  </div>
                  <Button btnText={"Buy Now"} />
                </div>
              </Blurdiv>
            </div>
            {/* Product Top End */}
          </div>
        </Conteinar>
      </div>
    </>
  );
};

export default Benner;
