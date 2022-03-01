/* eslint-disable @next/next/no-img-element */
import React from "react";

import SocialIconsContainer from "./../../Socials/SocialIconsContainer";
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const CollabContent = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      <p className="para  ">
        You can either fill the form or message me on social media
      </p>
      <div className="flex flex-row-reverse w-full gap-x-8  justify-start items-center pt-4 tabletbelow:flex-col h-full">
        <div className=" flex-1  bg-aaftab rounded-2xl p-6 w-full h-full">
          <div className="h-full rounded-2xl border-chaand border-4 min-h-full flex flex-col tabletbelow:flex-row tabletbelow:w-full justify-evenly items-center flex-wrap p-6">
            <SocialIconsContainer
              size={"2.2rem"}
              data={[
                {
                  url: "https://www.linkedin.com/in/saksham-raheja-4323b3190",
                  icon: <FaLinkedin />,
                },
                {
                  url: "https://twitter.com/hashsaksham",
                  icon: <FaTwitter />,
                },
                {
                  url: "https://instagram.com/hashsaksham",
                  icon: <FaInstagram />,
                },
                {
                  url: "https://discordapp.com/users/922671433346334810",
                  icon: <FaDiscord />,
                },
              ]}
            />
          </div>
        </div>
        <div className="grow-2 shrink-2 basis-0 flex items-center justify-center tabletbelow:w-full tabletbelow:mt-4">
          <img
            src="/collab.gif"
            className="object-contain"
            alt="collab-illustration"
          />
        </div>
      </div>
      {/* <div className="w-1/3"> */}
      {/* </div> */}
    </div>
  );
};

export default CollabContent;
