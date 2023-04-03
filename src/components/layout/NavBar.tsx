import { Icon } from "@iconify/react";
import { Transition } from "@tailwindui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../../public/assets/images/logo.png";
import Button from "../ui/Button";

const menuItems = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "about us",
    path: "/about-us",
  },
  {
    title: "portfolio",
    path: "/portfolio/all-productions",
  },
];

const NavBar = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleLenguage, setToggleLenguage] = useState(true); // true = EN ; false =  BG

  const { asPath } = useRouter();

  const DropDown = () => (
    <>
      {menuItems.map((item) => (
        <li className="nav-item" key={item.title}>
          <Link
            className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
            href={item.path}
          >
            <span
              className={(asPath === item.path && "font-semibold") + " ml-2"}
            >
              {item.title}
            </span>
          </Link>
        </li>
      ))}
      <li className="nav-item">
        <Link
          className="px-3 py-2 flex items-center leading-snug hover:opacity-75"
          href="/contact"
        >
          <Button title="CONNECT WITH US" />
        </Link>
      </li>
      <li className="px-3 py-2 flex items-center leading-snug hover:opacity-75">
        <button
          type="button"
          onClick={() => setToggleLenguage(true)}
          className={`${
            toggleLenguage ? "font-bold underline " : "semibold "
          } text-gray-800`}
        >
          EN
        </button>
      </li>
      <li className="px-3 py-2 flex items-center leading-snug hover:opacity-75">
        <button
          type="button"
          onClick={() => setToggleLenguage(false)}
          className={`${
            !toggleLenguage ? "font-bold underline " : "semibold "
          } text-gray-800`}
        >
          BG
        </button>
      </li>
    </>
  );

  return (
    <>
      <nav className="block flex-col md:flex md:flex-row justify-start items-center my-2 mr-8 bg-white">
        <div className="flex w-full items-center justify-between">
          <div className="px-7">
            <Link href="/">
              <Image src={logo} alt="logo" height={100} />
            </Link>
          </div>
          <button
            type="button"
            onClick={() => {
              setToggleMobile((prev) => !prev);
            }}
            className="block md:hidden"
          >
            <Icon
              icon="tabler:menu-2"
              className="text-[#27232C] hover:text-gray-600"
              fontSize={35}
            />
          </button>
        </div>

        <Transition
          show={toggleMobile}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
          className="inset absolute z-50 flex-row pl-5 pt-6 bg-white w-full flex"
        >
          <ul className="flex flex-col gap-y-5 lg:gap-y-6">
            <DropDown />
          </ul>
        </Transition>

        <div className="items lg">
          <ul className="hidden md:flex md:flex-row md:w-full list-none items-center justify-center whitespace-nowrap">
            <DropDown />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
