import React from "react";
import Images from "./Images";
import Button from "./Button";
import { IoBagHandleSharp } from "react-icons/io5";
import Conteinar from "./Conteinar";

const Topproduct = ({
  productImg,
  productTitle,
  productDesription,
  productPrice,
}) => {
  return (
    <>
      <Conteinar>
        <div className="my-5 border-2 border-white/10  p-8 rounded-[151px] bg-white/5 backdrop-blur-[5px] ">
          <div className="flex justify-end relative">
            <div className="">
              <Images
                imgSrc={productImg}
                className={"absolute bottom-10 left-0 "}
              />
            </div>
            <div className="py-20">
              <h4 className="text-[38px] font-semibold">{productTitle}</h4>
              <p className="text-[20px] w-[700px] py-6">{productDesription}</p>
              <p className="text-[38px] font-semibold pb-6">{productPrice}</p>
              <div className="flex gap-x-8">
                <div className="">
                  <Button btnText={"Explore"} />
                </div>
                <div className="border-2 p-3.5 rounded-xl cursor-pointer ">
                  <IoBagHandleSharp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Conteinar>
    </>
  );
};

export default Topproduct;
