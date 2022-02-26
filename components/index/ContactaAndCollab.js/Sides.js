import React from "react";

const Sides = ({ data }) => {
  return (
    <div className="flex-1 flex flex-col justify-start items-center desktopup:mx-10 p-5 tabletbelow:mx-2 my-5">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-left font-poppins-heading font-extrabold text-raqs text-5xl leading-[1.3rem] pb-4 round-underline ">
          {data.heading}
        </h2>
        <p className="sub-head ">{data.para}</p>
      </div>
    </div>
  );
};

export default Sides;
