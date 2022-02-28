import React from "react";

const Sides = ({ data }) => {
  return (
    <div className="flex-1 flex flex-col justify-start items-center  p-5 mobilebelow:mx-0 mobilebelow:px-0 desktopup:pb-0 desktopup:mx-10">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-left font-poppins-heading font-extrabold text-raqs text-5xl mobilebelow:text-4xl  pb-4 round-underline ">
          {data.heading}
        </h2>
        <p className="sub-head ">{data.para}</p>
      </div>
      {data.content}
    </div>
  );
};

export default Sides;
