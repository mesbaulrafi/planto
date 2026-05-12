import React from "react";
import Images from "./Images";
import ReveiwOne from "/src/assets/reviewImg1.png";
import Start from "/src/assets/Start.png";

const ReveiewCard = ({reveiewImg,reveiewTitle,reveiewText}) => {
  return (
    <>
      <div className="w-full md:w-[409px] border-2 border-white/10 py-8 md:py-11 px-6 md:px-9 rounded-[35px] md:rounded-[45px] bg-white/5 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-x-5 md:gap-x-7 pb-5 md:pb-7">
          {reveiewImg && (<Images
            imgSrc={reveiewImg}
            className="w-12 h-12 md:w-[58px] md:h-[58px] rounded-full object-cover"
          />) }
          <div>
            <p className="text-lg md:text-[22px] ">{reveiewTitle}</p>
            <Images imgSrc={Start} />
          </div>
        </div>
        <p className="opacity-75 font-light leading-relaxed text-sm md:text-base">{reveiewText}</p>
      </div>
    </>
  );
};

export default ReveiewCard;
