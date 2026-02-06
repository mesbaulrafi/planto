import React from "react";
import Images from './Images'
import Button from './Button';
import { IoBagHandleSharp } from "react-icons/io5";

const Buttomproduct = ({productImg,productTitle,productDesription,productPrice,}) => {
  return (
    <>
      <div className="my-5 px-28 border-2 border-white/10  p-8 rounded-[151px] bg-white/5 backdrop-blur-md">
        <div className="">
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
          <div className="">
            <Images imgSrc={productImg} className={'absolute bottom-10 right-20 '}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttomproduct;
