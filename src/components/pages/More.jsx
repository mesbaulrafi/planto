import React from "react";
import Container from "../Container";
import Images from "../Images";
import PlTree1 from "/src/assets/plTee1.png";
import Button from "../Button";
import Product from "../Product";
import PT1 from "/src/assets/tree1.png";
import PT2 from "/src/assets/tree2.png";
import PT3 from "/src/assets/pt3.png";
import PT4 from "/src/assets/pt4.png";
import PT5 from "/src/assets/pt5.png";
import PT6 from "/src/assets/pt6.png";
import ReveiewCard from "../ReveiewCard";
import ReveiwOne from "/src/assets/reviewImg1.png";

const More = () => {
  return (
    <>
      <Container className={"py-10"}>
        <div className="">
          {/* Our Top Selling Heading */}
          <div className="py-10 sm:py-17.5 text-center flex justify-center">
            <div className="relative inline-block">
              <div className="absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-b-4 border-l-4 border-[#abffb3aa] rounded-bl-[20px]"></div>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[55px] font-semibold px-5">
                Our Best Product
              </h2>
            </div>
          </div>
          {/* Our Top Selling Heading End */}

          <div className="">
            {/* Product Details */}
            <div className="border-2 border-white/10 p-5 sm:p-8 rounded-[30px] sm:rounded-[45px] bg-white/5 backdrop-blur-[5px]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Image */}
                <div className="w-full lg:w-auto flex justify-center">
                  <Images
                    imgSrc={PlTree1}
                    className={
                      "max-w-[300px] sm:max-w-[400px] lg:max-w-none w-full"
                    }
                  />
                </div>
                {/* Text */}
                <div className="w-full lg:w-[610px]">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl opacity-75 text-center lg:text-left">
                    We Have Small And Best O2 Plants Collection's
                  </h3>
                  <p className="py-6 sm:py-10.5 text-lg sm:text-xl lg:text-2xl opacity-75 text-center lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl opacity-75 text-center lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <Button btnText={"Explore"} className={"mt-8 sm:mt-10.5"} />
                  </div>
                </div>
              </div>
            </div>
            {/* Product Details End */}

            {/*Customer Review Heading */}
            <div className="pt-5  sm:py-17.5 text-center flex justify-center">
              <div className="relative inline-block">
                <div className="absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-b-4 border-l-4 border-[#abffb3aa] rounded-bl-[20px]"></div>
                <h2 className="text-[32px] sm:text-[42px] lg:text-[55px] font-semibold px-5">
                  Customer Review
                </h2>
              </div>
            </div>
            {/*  Customer Review Heading End */}
            {/* Customer Review Part */}
            <div className="py-5 sm:py-10">
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-y-32 sm:gap-y-16 gap-x-4">
                <ReveiewCard
                reveiewImg={ReveiwOne}
                  reveiewTitle={"Rohim"}
                  reveiewText={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem itaque ipsa accusantium deleniti sapiente dolore minus quis molestiae aut labore!"
                  }
                />
                <ReveiewCard
                reveiewImg={ReveiwOne}
                  reveiewTitle={"Korim"}
                  reveiewText={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem itaque ipsa accusantium deleniti sapiente dolore minus quis molestiae aut labore!"
                  }
                />
                <ReveiewCard
                reveiewImg={ReveiwOne}
                  reveiewTitle={"Selim"}
                  reveiewText={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem itaque ipsa accusantium deleniti sapiente dolore minus quis molestiae aut labore!"
                  }
                />
              </div>
            </div>
            {/* Customer Review Part End */}

            {/*Trusted Company  Heading */}
            <div className="pt-5  sm:py-17.5 text-center flex justify-center">
              <div className="relative inline-block">
                <div className="absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-b-4 border-l-4 border-[#abffb3aa] rounded-bl-[20px]"></div>
                <h2 className="text-[32px] sm:text-[42px] lg:text-[55px] font-semibold px-5">
                  Trusted Company 
                </h2>
              </div>
            </div>
            {/*  Trusted Company  Heading End */}
            {/* Trusted Company  Part */}
            <div className="py-5 sm:py-10">
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-y-32 sm:gap-y-16 gap-x-4">
                <ReveiewCard
                  reveiewTitle={"Rohim"}
                  reveiewText={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem itaque ipsa accusantium deleniti sapiente dolore minus quis molestiae aut labore!"
                  }
                />
                <ReveiewCard
                  reveiewTitle={"Korim"}
                  reveiewText={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem itaque ipsa accusantium deleniti sapiente dolore minus quis molestiae aut labore!"
                  }
                />
                <ReveiewCard
                  reveiewTitle={"Selim"}
                  reveiewText={
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem itaque ipsa accusantium deleniti sapiente dolore minus quis molestiae aut labore!"
                  }
                />
              </div>
            </div>
            {/* Trusted Company  Part End */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default More;
