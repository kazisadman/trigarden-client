import React from "react";
import Carousal from "../ui/carousal/Carousal";
import CtaButton from "../ui/CtaButton";

const Hero = () => {
  return (
    <div className="w-full h-[500px] lg:h-[824px] relative text-white">
      <Carousal />
      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 z-10"></div>
      <div className="content-container absolute z-20 top-[30%] left-0 right-0 lg:left-[10%]">
          <div className="space-y-10 lg:text-left text-center">
            <h1 className="text-[clamp(2.5rem,2vw+1rem,3.75rem)]">
              Nurture Your Green Paradies
            </h1>
            <p className="text-[clamp(1.25rem,2vw,2rem)]">
              Your Slogan Goes Here
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center gap-5">
                <CtaButton text={"Shop Now"} />
                <CtaButton text={"Call Now"} />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
