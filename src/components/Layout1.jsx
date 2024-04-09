import React from "react";
import Topnav from "./Topnav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout1() {
  return (
    <div>
      <Topnav />

      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout1;
