"use client";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  const toggleMenu = () => {
    setToggleBtn(!toggleBtn);
  };

  return (
    <div className=" z-10 w-full bg-blue-500  relative">
      <div className="flex justify-between items-center h-20 container m-auto px-4">
        <div>
          <a href="/" className=" text-white font-bold text-2xl">
            NBAConnect
          </a>
        </div>
        <div className="space-x-4 lg:flex hidden">
          <Link
            href="/news"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            News
          </Link>
          <Link
            href="/players"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Players
          </Link>
          <Link
            href="/teams"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Teams
          </Link>
          <Link
            href="/games"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Games
          </Link>
        </div>
        <FaBarsStaggered
          className="lg:hidden text-2xl text-white cursor-pointer "
          onClick={toggleMenu}
        />
        {toggleBtn && (
          <div className="bg-blue-400  text-white flex flex-col w-full fixed top-20 right-0 z-10 py-10 px-5">
            <div className="flex flex-col gap-4">
              <Link
                href="/news"
                onClick={() => setToggleBtn(false)}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                News
              </Link>
              <Link
                href="/players"
                onClick={() => setToggleBtn(false)}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Players
              </Link>
              <Link
                href="/teams"
                onClick={() => setToggleBtn(false)}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Teams
              </Link>
              <Link
                href="/games"
                onClick={() => setToggleBtn(false)}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Games
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
