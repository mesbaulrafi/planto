import React from "react";
import Images from "./Images";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Product = ({
  productImg,
  productTitle,
  productPrice,
  productDesription,
}) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-[48%] lg:w-[30%]">
      {/* Text Part  */}
      <div className="mt-20 sm:mt-25 border-2 border-white/10 p-5 sm:p-8 rounded-[35px] sm:rounded-[45px] bg-white/5 backdrop-blur-[5px] w-full max-w-[450px] h-[330px] sm:h-[630px] lg:h-[500px] flex flex-col justify-end relative [clip-path:polygon(51%_7%,85%_0,100%_0,100%_100%,0_100%,0_0,15%_0)] ">
        <div className="">
          <h5 className="opacity-75 text-[24px] sm:text-[30px] lg:text-[38px] my-3  sm:my-5">{productTitle}</h5>
          <p className="opacity-75 text-lg sm:text-xl lg:text-2xl py-5 sm:py-9 lg:py-4">{productDesription}</p>
          <div className="flex justify-between opacity-75 items-center">
            <div className="">
              <p className="opacity-75 text-[24px] sm:text-[30px] lg:text-[38px]">{productPrice}</p>
            </div>
            <div className="border-2 p-3 sm:p-3.5 rounded-xl cursor-pointer">
              <Link to={""}>
                <IoBagHandleSharp className="text-xl sm:text-2xl opacity-75" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Images Part  */}
      <div className="relative w-full">
        <Images
          imgSrc={productImg}
          className={"absolute bottom-[220px] lg:bottom-[260px] sm:bottom-[430px] left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-[200px] sm:w-auto"}
        />
      </div>
    </div>
  );
};

export default Product;