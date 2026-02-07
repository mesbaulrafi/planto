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
    <div className="">
      <div className="my-25 border-2 border-white/10 p-8 rounded-[45px] bg-white/5 backdrop-blur-[5px] max-w-[450px] h-[630px] flex flex-col justify-end relative [clip-path:polygon(100%_0,100%_100%,0_100%,0_0,50%_5%)]">
        <div className="">
          <h5 className="opacity-75 text-[38px] my-5">{productTitle}</h5>
          <p className="opacity-75 text-2xl py-9">{productDesription}</p>
          <div className="flex justify-between opacity-75 items-center">
            <div className="">
              <p className="opacity-75 text-[38px] ">{productPrice}</p>
            </div>
            <div className="border-2 p-3.5 rounded-xl cursor-pointer">
              <Link to={""}>
                <IoBagHandleSharp className="text-2xl opacity-75" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Images imgSrc={productImg} className={"absolute bottom-[430px] left-0 "} />
      </div>
    </div>
  );
};

export default Product;
