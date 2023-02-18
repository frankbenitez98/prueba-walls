import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/logo.png";
import Button from "../ui/Button";
const NavBar = () => {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4 py-2 bg-white">
        <div className="container px-20 h-28 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex lg:w-auto lg:static lg:block">
            <Image src={logo} alt="logo" height={120} />
          </div>
          <ul className="flex flex-col lg:flex-row list-none items-center justify-center">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
                href="/"
              >
                <span className="ml-2">home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
                href="#about-us"
              >
                <span className="ml-2">about us</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
                href="#portfolio"
              >
                <span className="ml-2">portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
                href="#contact"
              >
                <Button title="CONNECT WITH US" />
              </a>
            </li>
            <li className="px-3 py-2 flex items-center leading-snug hover:opacity-75">
              <span className="font-bold underline cursor-pointer">EN</span>
            </li>
            <li className="px-3 py-2 flex items-center leading-snug hover:opacity-75">
              <span className="cursor-pointer font-semibold text-gray-800">
                BG
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
