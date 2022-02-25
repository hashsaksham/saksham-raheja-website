import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({ href, label }) => {
  const router = useRouter();
  return (
    <li className="text-center">
      <Link href={href} passHref>
        <a
          className={`font-bold text-lg text-center text-raqs ${
            router.pathname == href &&
            "underline-offset-4 underline decoration-accent "
          }`}
        >
          {label}
        </a>
      </Link>
    </li>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <nav className=" sticky flex justify-center items-center h-20  w-full">
        <ul className="nav-links">
          <NavLink href={"/"} label={"Home"} />
          <NavLink href={"/blog"} label={"Blog"} />
        </ul>
        <div className="flex items-center justify-center w-1/6">
          <h1 className="text-2xl font-black text-center gradient-text ">SR</h1>
        </div>
        <ul className="nav-links">
          <NavLink href={"/latest"} label={"Latest Happenings"} />
          <NavLink href={"/projects"} label={"Projects"} />
        </ul>
      </nav>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
