import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav className="bg-black p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-xl font-bold text-white"> Movie Search</h3>
        <div className="space-x-4">
          <Link to="/" className="text-xl font-bold hover:text-blue-700">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
