import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaTruckFast, FaHandHoldingHeart, FaRecycle } from "react-icons/fa6";

import Container from "../Container";
import Images from "../Images";
import Button from "../Button";

import Tree1 from "/src/assets/tree1.png";
import Tree3 from "/src/assets/tree3.png";
import ReveiwOne from "/src/assets/reviewImg1.png";
import Start from "/src/assets/Start.png";

// Reusable section heading with the corner-border accent used across the site
const SectionHeading = ({ title }) => (
  <div className="text-center mb-10 sm:mb-16 flex justify-center">
    <div className="relative inline-block">
      <div className="absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-t-4 border-r-4 border-[#abffb369] rounded-tr-[20px]" />
      <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-b-4 border-l-4 border-[#abffb3aa] rounded-bl-[20px]" />
      <h2 className="text-[32px] sm:text-[42px] lg:text-[55px] font-semibold px-5">
        {title}
      </h2>
    </div>
  </div>
);

const values = [
  {
    icon: FaLeaf,
    title: "100% Organic",
    desc: "Every plant is grown and nurtured without any harmful chemicals.",
  },
  {
    icon: FaTruckFast,
    title: "Fast Delivery",
    desc: "Carefully packed plants delivered to your doorstep, on time.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Expert Care Tips",
    desc: "Personalised care guides so your plants thrive long after delivery.",
  },
  {
    icon: FaRecycle,
    title: "Eco-Friendly Packaging",
    desc: "Recyclable, plastic-free packaging that's kind to the planet.",
  },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "50+", label: "Plant Varieties" },
  { value: "5+", label: "Years Of Experience" },
  { value: "24/7", label: "Customer Support" },
];

const About = () => {
  return (
    <div className="pb-10">
      {/* Hero */}
      <div className="bg-[url('/src/assets/bg_home.png')] bg-center bg-cover bg-no-repeat py-5">
        <Container className={"pt-40 sm:pt-48 lg:pt-[200px] pb-16 sm:pb-24"}>
          <div className="text-center max-w-[820px] mx-auto">
            <p className="text-[#abffb3] text-base sm:text-lg tracking-wide uppercase opacity-80 pb-4">
              About Planto
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-semibold leading-tight text-[#c6c8c5]">
              Bringing Nature Closer To Your Home
            </h1>
            <p className="text-[#c6c8c5] text-base sm:text-lg lg:text-xl font-medium opacity-90 pt-6 leading-relaxed">
              We believe every home deserves a little more green. Since day
              one, Planto has been on a mission to make healthy, happy plants
              accessible to everyone — no green thumb required.
            </p>
            <div className="flex justify-center gap-x-6 pt-8">
              <Link to="/plantsType">
                <Button btnText={"Explore Plants"} className={"text-[#c6c8c5]"} />
              </Link>
              <Link to="/contact">
                <Button btnText={"Contact Us"} className={"text-[#c6c8c5]"} />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container className={"py-16 sm:py-24"}>
        {/* Our Story */}
        <div className="border-2 border-white/10 p-6 sm:p-10 rounded-[30px] sm:rounded-[45px] bg-white/5 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-[420px] flex justify-center">
              <Images imgSrc={Tree1} className={"w-full max-w-[320px] sm:max-w-[380px] object-contain"} eager />
            </div>
            <div className="w-full lg:flex-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold opacity-90">
                Our Story
              </h3>
              <p className="pt-5 sm:pt-6 text-base sm:text-lg lg:text-xl opacity-75 leading-relaxed">
                Planto started as a small idea between plant lovers who
                wanted fresher, healthier greenery without the hassle of
                hunting through crowded nurseries. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="pt-4 text-base sm:text-lg lg:text-xl opacity-75 leading-relaxed">
                Today, we grow, package, and ship every plant with the same
                care we'd want for our own homes — from the potting mix to
                the box it arrives in.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="pt-20 sm:pt-32">
          <SectionHeading title="Why Choose Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="border-2 border-white/10 rounded-[30px] p-6 sm:p-8 bg-white/5 backdrop-blur-md text-center hover:border-[#abffb369] transition-colors"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full border-2 border-[#abffb369] mb-5">
                  <value.icon className="text-2xl sm:text-3xl text-[#abffb3]" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold pb-3">{value.title}</h4>
                <p className="opacity-70 text-sm sm:text-base leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="m-20 sm:mt-32 border-2 border-white/10 rounded-[30px] sm:rounded-[45px] bg-white/5 backdrop-blur-md py-10 sm:py-14 px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#abffb3]">
                  {value}
                </p>
                <p className="opacity-70 text-sm sm:text-base pt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission + Image */}
        <div className="pt-20 sm:pt-32 border-2 border-white/10 p-6 sm:p-10 rounded-[30px] sm:rounded-[45px] bg-white/5 backdrop-blur-md">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:flex-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold opacity-90">
                Our Mission
              </h3>
              <p className="pt-5 sm:pt-6 text-base sm:text-lg lg:text-xl opacity-75 leading-relaxed">
                To make plant parenthood simple, sustainable, and joyful for
                everyone — one healthy plant at a time. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="pt-8">
                <Link to="/plantsType">
                  <Button btnText={"Shop Plants"} />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[380px] flex justify-center">
              <Images imgSrc={Tree3} className={"w-full max-w-[100px] sm:max-w-[241px] object-contain"} />
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="pt-20 sm:pt-32 flex justify-center">
          <div className="w-full sm:w-[409px] border-2 border-white/10 py-8 sm:py-11 px-6 sm:px-9 rounded-[35px] sm:rounded-[45px] bg-white/5 backdrop-blur-md">
            <div className="flex items-center gap-x-5 sm:gap-x-7 pb-5 sm:pb-7">
              <Images
                imgSrc={ReveiwOne}
                className="w-12 h-12 sm:w-[58px] sm:h-[58px] rounded-full object-cover"
              />
              <div>
                <p className="text-lg sm:text-[22px]">Zila</p>
                <Images imgSrc={Start} />
              </div>
            </div>
            <p className="opacity-75 font-light leading-relaxed text-sm sm:text-base">
              Planto completely changed how I shop for plants. Healthy,
              beautifully packed, and their care tips actually work!
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;