import React from "react";
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import Conteinar from "../Conteinar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-7">
      <Conteinar>
        <div className="flex justify-between">
          <div className="">
            <Images imgSrc={Logo} className={''}/>
          </div>
          <div className="pt-6 ">
            <ul className="flex gap-x-15">
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80">Home</li></Link>
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80">Plants Type</li></Link>
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80">More</li></Link>
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80">Contact</li></Link>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </Conteinar>
    </div>
  );
};

export default Header;
