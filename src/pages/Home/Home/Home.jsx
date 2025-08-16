import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "../Slider/Slider";
import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import Coupons from "../Coupons/Coupons";
import Location from "../Location/Location";
import HowItWorks from "../HowItWorks/HowItWorks";
import Testimonials from "../Testimonials/Testimonials";
import Newsletter from "../newsletter/Newsletter";
import Promotions from "../promotions/Promotions";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,           
      easing: "ease-in-out",          
    });
  }, []);

  return (
    <div>
      {/* 1. Slider / Hero */}
      <div className="w-11/12 max-w-[1600px] py-8 md:py-12 mx-auto" data-aos="fade-up">
        <Slider />
      </div>

      {/* 2. About The Building */}
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12" data-aos="fade-up">
        <AboutTheBuilding />
      </div>

      {/* 3. Promotions / Offers */}
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12" data-aos="fade-up" >
        <Promotions />
      </div>

      {/* 4. How It Works */}

      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12" data-aos="fade-up">
        <HowItWorks />
      </div>

      {/* 5. Testimonials */}
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12" data-aos="fade-up">
        <Testimonials />
      </div>

      {/* 6. Coupons */}
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12" data-aos="fade-up">
        <Coupons />
      </div>

      {/* 7. Newsletter / Subscribe */}
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12" data-aos="fade-up">
        <Newsletter />
      </div>

      {/* 8. Location */}
      <div className="w-11/12 max-w-[1600px] mx-auto pb-8 md:pb-12" data-aos="fade-up">
        <Location />
      </div>
    </div>
  );
};

export default Home;
