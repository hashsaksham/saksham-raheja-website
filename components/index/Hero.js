import React from "react";

import Heading from "./Hero/Heading";
import LeftCol from "./Hero/LeftCol";
import MiddleCol from "./Hero/MiddleCol";
import RightCol from "./Hero/RightCol";

const Hero = () => {
  return (
    <div className="flex flex-col desktopup:h-[calc(100vh-5rem)] tabletbelow:min-h-[calc(100vh-5rem)]  bg-aaftab">
      <Heading />
      <div className="flex flex-1 tabletbelow:flex-col">
        <LeftCol />

        <MiddleCol />

        <RightCol />
      </div>
    </div>
  );
};

export default Hero;
