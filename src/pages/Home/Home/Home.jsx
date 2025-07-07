import React from "react";
import { AuthContext } from "../../../context/AuthContext";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
