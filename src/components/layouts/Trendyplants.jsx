import React from "react";
import Conteinar from "../Conteinar";
import Topproduct from "../Topproduct";
import Tree2 from "/src/assets/tree2.png";
import Tree3 from "/src/assets/tree3.png";
import Buttomproduct from "../Buttomproduct";

const Trendyplants = () => {
  return (
    <>
      <Conteinar>
        <div className="mb-40">
          {/* Text Part  */}
          <div className="text-center mb-20 flex justify-center">
            <div className="relative inline-block">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#abffb369] rounded-bl-[20px]"></div>
              <h2 className="text-[55px] font-semibold px-4 ">
                Our Trendy plants
              </h2>
            </div>
          </div>

          <Topproduct
            productImg={Tree2}
            productTitle={"For Small Decs Ai Plat"}
            productDesription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
            productPrice={"Rs. 599/-"}
          />
        </div>

        <div>
          <Buttomproduct
            productImg={Tree3}
            productTitle={"For Small Decs Ai Plat"}
            productDesription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
            productPrice={"Rs. 599/-"}
          />
        </div>
      </Conteinar>
    </>
  );
};

export default Trendyplants;
