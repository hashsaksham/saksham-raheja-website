/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaBehance,
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import SocialIconsContainer from "../../Socials/SocialIconsContainer";

const MiddleCol = () => {
  return (
    <div className="flex items-center justify-evenly flex-col w-6/12 desktopup:mx-8 tabletbelow:w-full tabletbelow:flex-1">
      <div className=" flex flex-row w-full justify-center py-4 mobile:flex-col ">
        <div className="flex flex-col items-center justify-evenly flex-wrap flex-1 order-1 mobile:order-2 tabletbelow:flex-row tabletbelow:mt-8">
          <SocialIconsContainer
            data={[
              { url: "https://github.com/hashsaksham", icon: <FaGithub /> },
              {
                url: "https://www.linkedin.com/in/saksham-raheja-4323b3190",
                icon: <FaLinkedin />,
              },
              {
                url: "https://twitter.com/hashsaksham",
                icon: <FaTwitter />,
              },
              {
                url: "mailto:sakshamraheja11@gmail.com",
                icon: <FaEnvelope />,
              },
            ]}
          />
        </div>
        <div className="flex items-center justify-center order-2 mobile:order-1 w-60 h-60 tablet:w-30 tablet:h-30 self-center rounded-2xl rounded-tl-[5rem] flex-1 ">
          <img
            src="/main.jpg"
            alt="me"
            className="rounded-tl-[5rem] tabletbelow:rounded-tl-[2rem] rounded-2xl shadow-accent shadow-lg  border-b-noor border-b-[6px] border-r-[6px] border-r-noor max-h-full"
          />
        </div>
        <div className="flex flex-col items-center justify-evenly flex-wrap flex-1 order-3 tabletbelow:order-3 tabletbelow:flex-row tabletbelow:mt-8">
          <SocialIconsContainer
            data={[
              {
                url: "https://instagram.com/hashsaksham",
                icon: <FaInstagram />,
              },
              {
                url: "https://open.spotify.com/user/m9ahe2w7uakp3mdzu3kfkitiv",
                icon: <FaSpotify />,
              },
              {
                url: "https://discordapp.com/users/922671433346334810",
                icon: <FaDiscord />,
              },
              {
                url: "https://facebook.com/hashsaksham",
                icon: <FaFacebook />,
              },
            ]}
          />
        </div>
      </div>
      <div className="mx-12 desktopup:mx-4 flex justify-center items-center text-center my-3 mobilebelow:mx-0">
        <p className="desc-text mobilebelow:px-3 mobilebelow:pb-6 ">
          A 17 year old Developer and Math Enthusiast. I am member in{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://exunclan.com"
            className="link"
          >
            <span className="keyword">Exun Clan</span>
          </a>
          , the technology club of my school,{" "}
          <span className="keyword">Delhi Public School, R.K. Puram</span>. I
          love to develop & tinker with stuff. I love{" "}
          <span className="keyword-under">Silicon Chips</span> and{" "}
          <span className="keyword-under">Music</span> among other things. I
          strongly believe in
          <span className="keyword-under">&quot;We, Not I&quot;.</span>
        </p>
      </div>
    </div>
  );
};

export default MiddleCol;
