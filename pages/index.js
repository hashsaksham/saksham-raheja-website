/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import ContactAndCollab from "../components/index/ContactAndCollab";
import Hero from "../components/index/Hero";

import useAppContext from "./../contexts/AppContext";

export default function Home() {
  // const { pageSections, setPageSections } = useAppContext();
  // useEffect(() => {
  //   setPageSections([
  //     {label: "Home"},
  //     {label: ""},
  //     {label: ""},
  //   ])
  // }, [setPageSections]);

  return (
    <div className="mt-20">
      <Hero />
      <ContactAndCollab />
    </div>
  );
}
