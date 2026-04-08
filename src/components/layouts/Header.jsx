import React, { useState } from "react";
import Images from "../Images";
import Logo from "/src/assets/Logo.png";
import Container from "../Container"; 
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsListNested } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx"; // Menu close korar icon (Optional kintu bhalo)

const Header = () => {
  // Mobile menu toggle korar state
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plants Type", path: "/PlantsType" },
    { name: "More", path: "/more" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="py-7 relative bg-transparent w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="relative z-50">
            <Link to={'/'}>
              <Images imgSrc={Logo} className="w-full" />
            </Link>
          </div>

          {/* Desktop Navigation (Visible only on lg and up) */}
          <nav className="hidden lg:block">
            <ul className="flex gap-x-15">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-2xl font-medium text-white opacity-80 hover:text-emerald-400 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons Section */}
          <div className="flex items-center gap-x-6 lg:gap-x-15">
            {/* Search & Bag - Hidden on Mobile/Tablet, Visible on LG */}
            <button className="hidden lg:block text-white text-3xl font-bold hover:text-emerald-300 transition-colors">
              <CiSearch />
            </button>
            <button className="hidden lg:block text-white text-3xl font-bold hover:text-emerald-300 transition-colors">
              <IoBagHandleOutline />
            </button>
            
            {/* Mobile Menu Toggle Icon (Hidden on LG) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white text-3xl font-bold hover:text-emerald-300 transition-all z-50"
            >
              {isOpen ? <RxCross2 /> : <BsListNested />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar/Menu */}
        <div className={`
          fixed top-0 left-0 h-screen w-full bg-slate-900/95 flex flex-col items-center justify-center gap-y-8 transition-all duration-500 lg:hidden
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}>
          <ul className="text-center flex flex-col gap-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-semibold text-white hover:text-emerald-400 block p-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            {/* Mobile View te Search ar Bag jodi chao ekhane rakhte paro, nile bad dite paro */}
            <div className="flex gap-x-10 justify-center mt-6 text-white text-3xl">
               <CiSearch onClick={() => setIsOpen(false)} />
               <IoBagHandleOutline onClick={() => setIsOpen(false)} />
            </div>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;