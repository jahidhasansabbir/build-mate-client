import React from "react";
import { AuthContext } from "../../../context/AuthContext";
import Slider from "../Slider/Slider";
import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import Coupons from "../Coupons/Coupons";
import Location from "../Location/Location";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 max-w-[1600px] py-8 md:py-12  mx-auto">
        <Slider />
      </div>
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12 ">
        <AboutTheBuilding></AboutTheBuilding>
      </div>
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12">
        <Coupons></Coupons>
      </div>
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12">
        <Location></Location>
      </div>
    </div>
  );
};

export default Home;
