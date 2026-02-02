import React from "react";
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import Conteinar from "../Conteinar";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsListNested } from "react-icons/bs";





const Header = () => {
  return (
    <header className="py-7">
      <Conteinar>
        <div className="flex justify-between">
          <div className="">
           <Link to={'/'}><Images imgSrc={Logo} className={''}/></Link>
          </div>
          <div className="pt-6 ">
            <ul className="flex gap-x-15">
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80 hover:text-emerald-400">Home</li></Link>
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80 hover:text-emerald-400">Plants Type</li></Link>
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80 hover:text-emerald-400">More</li></Link>
              <Link to={''}><li className="text-2xl font-medium text-white opacity-80 hover:text-emerald-400">Contact</li></Link>
            </ul>
          </div>
          <div className="pt-6 ">
            <div className="flex gap-x-15">
              <i className="text-white text-2xl font-bold  hover:text-emerald-300"><CiSearch /></i>
              <i className="text-white text-2xl font-bold  hover:text-emerald-300"><IoBagHandleOutline /></i>
              <i className="text-white text-2xl font-bold  hover:text-emerald-300"><BsListNested /></i>
            </div>
          </div>
        </div>
      </Conteinar>
    </header>
  );
};

export default Header;
