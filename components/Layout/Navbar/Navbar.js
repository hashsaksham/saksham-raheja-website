import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowSize.width > 1023) {
      setMenuOpen(false);
    }
  }, [windowSize.width]);

  return (
    <>
      <nav className="fixed flex justify-center items-center h-20 top-0 left-0  w-full z-50  bg-aaftab">
        <ul className="flex justify-evenly items-center tabletbelow:hidden w-5/12 h-full ">
          <NavLink href={"/"} label={"Home"} />
          <NavLink href={"/blog"} label={"Blog"} />
        </ul>
        {/*  */}
        <Link href={"/"} passHref>
          <div className="flex items-center justify-center w-1/6 cursor-pointer z-40">
            <h1 className="text-2xl font-black text-center gradient-text ">
              SR
            </h1>
          </div>
        </Link>
        {/*  */}
        <ul className="flex justify-evenly items-center tabletbelow:hidden w-5/12 h-full ">
          <NavLink href={"/latest"} label={"Life"} />
          <NavLink href={"/projects"} label={"Projects"} />
        </ul>
        {/*  */}
        <button
          className="h-full hidden tabletbelow:flex justify-center items-center px-10 tabletbelow:ml-auto z-40"
          onClick={toggleNav}
        >
          {menuOpen ? <GrFormClose size={"3rem"} /> : <FaBars size={"2rem"} />}
        </button>{" "}
        <div
          className={`fixed  ${
            menuOpen ? "translate-y-0 block" : "hidden translate-y-[-100vh]"
          }  transition-transform duration-500 top-20 left-0 right-0 bottom-0 bg-aaftab  text-raqs z-40 border-t-4 border-t-accent`}
        >
          <ul className="flex justify-center items-center flex-col w-full ">
            <NavLink
              href={"/"}
              label={"Home"}
              menu={true}
              setMenuOpen={setMenuOpen}
            />
            <NavLink
              href={"/blog"}
              label={"Blog"}
              menu={true}
              setMenuOpen={setMenuOpen}
            />
            <NavLink
              href={"/latest"}
              label={"Life Updates"}
              menu={true}
              setMenuOpen={setMenuOpen}
            />
            <NavLink
              href={"/projects"}
              label={"Projects"}
              menu={true}
              setMenuOpen={setMenuOpen}
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
