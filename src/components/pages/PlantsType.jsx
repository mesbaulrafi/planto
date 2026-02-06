import React from "react";
import Conteinar from "../Conteinar";
import Blurdiv from "../Blurdiv";
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

const PlantsType = () => {
  return (
    <>
      <Conteinar className={"py-10"}>
        <div className="">
          {/* Our Top Selling  Hedding */}
          <div className="py-17.5 text-center  flex justify-center">
            <div className="relative inline-block ">
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-[#abffb3aa] rounded-bl-[20px]"></div>
              <h2 className="text-[55px] font-semibold px-5 ">
                Our Top Selling
              </h2>
            </div>
          </div>
          {/* Our Top Selling  Hedding End */}
          <div className="">
            {/* Product Details */}
            <div className="border-2 border-white/10  p-8 rounded-[45px] bg-white/5 backdrop-blur-[5px]">
              <div className="flex items-center justify-between">
                <div className="">
                  <Images imgSrc={PlTree1} />
                </div>
                <div className="w-[610px] ">
                  <h3 className="text-4xl opacity-75">
                    We Have Small And Best O2 Plants Collection’s
                  </h3>
                  <p className="py-10.5 text-2xl opacity-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                  <p className="text-2xl opacity-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <Button btnText={"Explore"} className={"mt-10.5"} />
                </div>
              </div>
            </div>
            {/* Product Details End */}

            {/* Top Selling Product Part  */}
            <div className="py-60">
              {/* Fast Row  */}
              <div className="flex items-center justify-between">
                {/* p1 */}
                <Product
                  productImg={PT1}
                  productTitle={"Calathea plant"}
                  productDesription={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  productPrice={"Rs. 359/-"}
                />
                {/* p2 */}
                <Product
                  productImg={PT2}
                  productTitle={"Calathea plant"}
                  productDesription={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  productPrice={"Rs. 359/-"}
                />
                {/* p3 */}
                <Product
                  productImg={PT3}
                  productTitle={"Calathea plant"}
                  productDesription={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  productPrice={"Rs. 359/-"}
                />
              </div>
              {/* Fast row End  */}
              <div className="flex items-center justify-between">
                {/* p1 */}
                <Product
                  productImg={PT4} 
                  productTitle={"Calathea plant"}
                  productDesription={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  productPrice={"Rs. 359/-"}
                />
                {/* p2 */}
                <Product
                  productImg={PT5}
                  productTitle={"Calathea plant"}
                  productDesription={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  productPrice={"Rs. 359/-"}
                />
                {/* p3 */}
                <Product
                  productImg={PT6}
                  productTitle={"Calathea plant"}
                  productDesription={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  }
                  productPrice={"Rs. 359/-"}
                />
              </div>
            </div>
            {/* Top Selling Product Part  */}
          </div>
        </div>
      </Conteinar>
    </>
  );
};

export default PlantsType;
