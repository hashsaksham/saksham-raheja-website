import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavLink = ({ href, label, menu = false, setMenuOpen }) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <li
        onClick={menu ? () => setMenuOpen(false) : null}
        className={`text-center ${
          menu && `w-full py-6 px-2 ${router.pathname == href && "bg-chaand"}`
        } `}
      >
        <a
          className={`font-extrabold  text-center text-raqs ${
            router.pathname == href &&
            "underline-offset-4 underline decoration-accent"
          }
          ${menu ? "text-xl " : "text-lg"}
          `}
        >
          {label}
        </a>
      </li>
    </Link>
  );
};

export default NavLink;
