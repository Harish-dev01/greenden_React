import React from "react";
import { NavLink } from "react-router-dom";


function Topnav() {
  return (
    <nav className="bg-green-100 p-3 flex items-center justify-between shadow-xl sticky top-0 z-10">
      <h1 className="text-2xl">Greenden</h1>
      <div>
      <NavLink to={"/"} className="mr-9">Home</NavLink>
      <NavLink to={"/products"} className="mr-9" >Products</NavLink>
      <NavLink to={"/contact"} className="mr-9">Contact</NavLink>
      </div>

      
    </nav>
  );
}

export default Topnav;
