import React, { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight ">
          <img
            src="https://th.bing.com/th/id/OIP.jTqtwtaO38L0OKEgH3bVFwAAAA?rs=1&pid=ImgDetMain"
            alt=""
            className="ml-2 lg:ml-10 md:ml-10 w-32"
          />
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMobile ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto md:w-auto`}
      >
        <div className="text-sm lg:flex-grow md:flex-grow text-start lg:text-end mr-10">
          <a
            href="#features"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500  mr-4"
          >
            Features
          </a>
          <a
            href="#exchanges"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500   mr-4"
          >
            Exchanges
          </a>
          <a
            href="#how-it-works"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500   mr-4"
          >
            How It Works
          </a>
          <a
            href="#blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500   mr-4"
          >
            Blog
          </a>
          <a
            href="#about-us"
            className="block mt-4 lg:inline-block lg:mt-0 text-blue-500  "
          >
            About Us
          </a>
        </div>
        <div>
          <a
            href="#signin"
            className="inline-block text-sm px-4 py-2 leading-none border border-blue-700 rounded-md text-blue-700 font-bold   mt-4 lg:mt-0"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
