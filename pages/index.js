/* eslint-disable @next/next/no-img-element */
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
import SocialIconsContainer from "../components/Socials/SocialIconsContainer";

export default function Home() {
  return (
    <div className="flex flex-col desktopup:h-[calc(100vh-5rem)]  bg-aaftab">
      <div className="p-5 flex justify-center items-center flex-col mobilebelow:p-3 mobilebelow:pt-4">
        <div>
          <div className="font-light text-sm px-4  text-raqs uppercase font-karla-para mobilebelow:text-center">
            Namaste, I am
          </div>
          <h1 className="text-7xl mobilebelow:text-5xl p-4 pt-2 text-accent gradient-text text-center font-poppins-heading">
            Saksham Raheja
          </h1>
        </div>
        <h2 className="text-base text-center  font-black text-qurbat pl-4 underline-offset-8 underline mt-2 font-poppins-heading tracking-widest">
          @hashsaksham
        </h2>
      </div>
      <div className="flex flex-1 tabletbelow:flex-col">
        <div className="w-3/12  flex flex-col items-center justify-end tabletbelow:hidden">
          <div className="flex justify-start items-end w-full">
            <img
              src="/cool-guy-crossing-road.svg"
              alt="illustration"
              className="w-6/12"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-start flex-col w-6/12 desktopup:mx-8 tabletbelow:w-full">
          <div className="flex flex-row w-full justify-center py-4 mobile:flex-col">
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
            {/* IMAGE  */}
            <div className="flex items-center justify-center order-2 mobile:order-1 w-60 h-60 tablet:w-30 tablet:h-30 self-center rounded-2xl rounded-tl-[5rem] flex-1 ">
              <img
                src="/main.jpg"
                alt="me"
                className="rounded-tl-[5rem] tabletbelow:rounded-tl-[2rem] rounded-2xl shadow-accent shadow-2xl  border-b-noor border-b-[6px] border-r-[6px] border-r-noor max-h-full"
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
          {/* SUBTEXT */}
          <div className="mx-12 flex justify-center items-center text-center mt-3">
            <p className="sub-head mobilebelow:px-4">
              A 14 year old Developer and Computer Enthusiast. I am member in{" "}
              <a href="https://exunclan.com" className="link">
                <span className="keyword">Exun Clan</span>
              </a>
              , the technology club of my school,{" "}
              <span className="keyword">Delhi Public School, R.K. Puram</span>.
              I love to develop & tinker with stuff. I love silicon chips and
              music.
            </p>
          </div>
        </div>

        <div className="w-3/12  flex flex-col items-center justify-end tabletbelow:hidden">
          <div className="flex justify-end items-end w-full ">
            <img
              src="/cool-guy-crossing-road.svg"
              alt="illustration"
              className="w-6/12 -scale-x-100 z-10"
            />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
