import React from "react";
import { AuthContext } from "../../../context/AuthContext";
import Slider from "../Slider/Slider";
import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import Coupons from "../Coupons/Coupons";
import Location from "../Location/Location";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Slider />
      </div>
      <div className="w-11/12 mx-auto">
        <AboutTheBuilding></AboutTheBuilding>
      </div>
      <div className="w-11/12 mx-auto">
        <Coupons></Coupons>
      </div>
      <div className="w-11/12 mx-auto">
        <Location></Location>
      </div>
    </div>
  );
};

export default Home;
