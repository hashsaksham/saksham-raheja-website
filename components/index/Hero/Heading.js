import React from "react";

const Heading = () => {
  return (
    <div className="p-5 flex justify-center items-center flex-col mobilebelow:p-3 mobilebelow:pt-4">
      <div>
        <div className="font-light text-sm px-4  text-raqs uppercase font-karla-para mobilebelow:text-center">
          Namaste, I am
        </div>
        <h1 className="text-7xl mobilebelow:text-5xl p-4 pt-2 text-accent gradient-text text-center font-poppins-heading font-black">
          Saksham Raheja
        </h1>
      </div>
      <h2 className="text-base text-center  font-black text-qurbat pl-4 underline-offset-8 underline mt-2 font-poppins-heading tracking-widest">
        @hashsaksham
      </h2>
    </div>
  );
};

export default Heading;
