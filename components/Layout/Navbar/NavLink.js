import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const NavLink = ({ href, label, menu = false, setMenuOpen }) => {
  const router = useRouter();
  const [path, setPath] = useState(null);
  // console.log();
  useEffect(() => {
    setPath(router.asPath);
  }, [router.asPath]);

  return (
    <Link href={href} passHref>
      <li
        onClick={menu ? () => setMenuOpen(false) : null}
        className={`text-center cursor-pointer ${
          menu && `w-full py-6 px-2 ${path == href && "bg-chaand"}`
        } `}
      >
        <a
          className={`cursor-pointer font-extrabold  text-center text-raqs ${
            path == href && "underline-offset-4 underline decoration-accent"
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
