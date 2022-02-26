import React from "react";
import Illustration from "./Illustration";

const RightCol = () => {
  return (
    <div className="w-3/12  flex flex-col items-center justify-end tabletbelow:hidden">
      <Illustration dir={"right"} />
    </div>
  );
};

export default RightCol;

// img: -scale-x-100
// div2: justify-start/justify-end
