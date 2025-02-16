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

  const links = [
    { href: "/", label: "Home", left: true },
    { href: "/", label: "", left: true },
    { href: "/", label: "", right: true },
    { href: "/", label: "", right: true },
  ];

  return (
    <>
      <nav className="fixed flex justify-center items-center h-20 top-0 left-0  w-full z-50  bg-aaftab">
        <ul className="flex justify-evenly items-center tabletbelow:hidden w-5/12 h-full ">
          {links
            .filter((link) => link.left)
            .map((link, index) => {
              return (
                <NavLink key={index} href={link.href} label={link.label} />
              );
            })}
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
          {links
            .filter((link) => link.right)
            .map((link, index) => {
              return (
                <NavLink key={index} href={link.href} label={link.label} />
              );
            })}
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
            menuOpen ? "translate-y-0 " : " translate-y-[-200vh]"
          }  transition-all duration-500 top-20 left-0 right-0 bottom-0 bg-aaftab hidden tabletbelow:block  text-raqs z-40 border-t-4 border-t-accent`}
        >
          <ul className="flex justify-center items-center flex-col w-full ">
            {links.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  href={link.href}
                  label={link.label}
                  menu={true}
                  setMenuOpen={setMenuOpen}
                />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
