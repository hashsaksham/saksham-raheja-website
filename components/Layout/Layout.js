import React from "react";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
