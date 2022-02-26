/* eslint-disable @next/next/no-img-element */

import React from "react";

const Illustration = ({ dir }) => {
  return (
    <div
      className={`flex items-end w-full ${
        dir === "right" ? "justify-end" : " justify-start"
      }`}
    >
      <img
        src="/cool-guy-crossing-road.svg"
        alt="illustration"
        className={`w-6/12 ${dir === "right" && "-scale-x-100"}`}
      />
    </div>
  );
};

export default Illustration;
