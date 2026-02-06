import React from "react";
import Conteinar from "../Conteinar";
import Blurdiv from "../Blurdiv";
import Images from "../Images";
import Tree1 from "/src/assets/tree1.png";

const PlantsType = () => {
  return (
    <>
      <Conteinar>
        <div className="">
          {/* Product Details */}
          <div className="">
            <Blurdiv>
              <div className="flex">
                <div className="">
                  <Images imgSrc={Tree1}/>
                </div>
                <div className=""></div>
              </div>
            </Blurdiv>
          </div>

        </div>
      </Conteinar>
    </>
  );
};

export default PlantsType;
