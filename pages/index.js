/* eslint-disable @next/next/no-img-element */
import { IconContext } from "react-icons";
import { activeTheme } from "../styles/themes";
import {
  FaBehance,
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[90vh] bg-aaftab">
      <div className="p-10 pb-5 flex justify-center items-center flex-col">
        <div>
          <div className="font-light text-sm px-4  text-raqs uppercase">
            Namaste, I am
          </div>
          <h1 className="text-7xl p-4 pt-2  text-accent gradient-text text-center">
            Saksham <span className="text-qurbat">Raheja</span>
          </h1>
        </div>
        <h2 className="text-base text-center  font-black text-qurbat pl-4 underline-offset-8 underline mt-2">
          @hashsaksham
        </h2>
      </div>
      <div className="flex flex-1">
        <div className="w-3/12  flex flex-col items-center justify-end">
          <div className="flex justify-start items-end w-full">
            <img
              src="/cool-guy-crossing-road.svg"
              alt="illustration"
              className="w-6/12"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-start flex-col w-6/12 mx-8">
          <div className="flex flex-row w-full justify-center my-6 tabletbelow:flex-col">
            <div className="flex flex-col items-center justify-evenly flex-1 order-1 tabletbelow:order-2 tabletbelow:flex-row tabletbelow:mt-8">
              <IconContext.Provider
                value={{ color: activeTheme.qurbat, size: "1.8rem" }}
              >
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/hashsaksham"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/saksham-raheja-4323b3190/"
                >
                  <FaLinkedin />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:sakshamraheja11@gmail.com"
                >
                  <FaEnvelope />
                </a>
              </IconContext.Provider>
            </div>
            {/* IMAGE  */}
            <div className="flex items-center justify-centerw order-2 tabletbelow:order-1 w-60 h-60 self-center rounded-2xl rounded-tl-[5rem] flex-1 ">
              <img
                src="/main.jpg"
                alt="me"
                className="rounded-tl-[5rem] tabletbelow:rounded-tl-[2rem] rounded-2xl shadow-accent shadow-2xl  border-b-noor border-b-[6px] border-r-[6px] border-r-noor"
              />
            </div>
            <div className="flex flex-col items-center justify-evenly flex-1 order-3 tabletbelow:order-3 tabletbelow:flex-row tabletbelow:mt-8">
              <IconContext.Provider
                value={{ color: activeTheme.qurbat, size: "1.8rem" }}
              >
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://discordapp.com/users/922671433346334810"
                >
                  <FaDiscord />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/hashsaksham"
                >
                  <FaTwitter />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://facebook.com/hashsaksham"
                >
                  <FaFacebook />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/hashsaksham"
                >
                  <FaInstagram />
                </a>
              </IconContext.Provider>
            </div>
          </div>
          {/* SUBTEXT */}
          <div className="mx-12 flex justify-center items-center text-center mt-10">
            <p className="sub-head">
              A developer at{" "}
              <a href="https://exunclan.com" className="link">
                <span className="keyword">Exun Clan</span>
              </a>{" "}
              and studying in{" "}
              <span className="keyword">Delhi Public School, R.K. Puram</span>.
              I love to develop & tinker with stuff. I love silicon chips and
              music.
            </p>
          </div>
        </div>

        <div className="w-3/12  flex flex-col items-center justify-end">
          <div className="flex justify-end items-end w-full ">
            <img
              src="/cool-guy-crossing-road.svg"
              alt="illustration"
              className="w-6/12 -scale-x-100"
            />
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
