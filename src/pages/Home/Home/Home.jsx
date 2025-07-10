import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "../Slider/Slider";
import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import Coupons from "../Coupons/Coupons";
import Location from "../Location/Location";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
    });
  }, []);

  return (
    <div>
      <div
        className="w-11/12 max-w-[1600px] py-8 md:py-12  mx-auto"
        data-aos="fade-up"
      >
        <Slider />
      </div>
      <div
        className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12"
        data-aos="fade-up"
      >
        <AboutTheBuilding />
      </div>
      <div
        className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12"
        data-aos="fade-up"
      >
        <Coupons />
      </div>
      <div
        className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12"
        data-aos="fade-up"
      >
        <Location />
      </div>
    </div>
  );
};

export default Home;
