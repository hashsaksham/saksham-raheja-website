import React from "react";
import Illustration from "./Illustration";

const LeftCol = () => {
  return (
    <div className="w-3/12  flex flex-col items-center justify-end tabletbelow:hidden">
      <Illustration />
    </div>
  );
};

export default LeftCol;
