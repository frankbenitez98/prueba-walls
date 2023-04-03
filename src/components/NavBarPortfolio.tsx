import React, { FC, useState } from "react";
import Link from "next/link";
import IconSvg from "./ui/IconSvg";
import { useRouter } from "next/router";
import { MenuItem } from "../pages/portfolio/[id]/index";

type Props = {
  currentItem: MenuItem;
  menuItems: MenuItem[];
  setNumCards: (value: number) => void;
};

const NavBarPortfolio: FC<Props> = ({
  currentItem,
  menuItems,
  setNumCards,
}) => {
  const {
    query: { id },
  } = useRouter();

  const handleLinkClick = () => {
    setNumCards(9);
  };
  return (
    <div className="w-full ">
      <div className="flex flex-col gap-y-1 bg-[#27232C] px-10 lg:px-48 py-2 sm:py-14 h-auto sm:h-[550px]">
        <div className="flex flex-row gap-4">
          {currentItem?.svg && <IconSvg svg={currentItem?.svg} />}
          <div className="flex flex-col">
            <span className="text-white tracking-widest font-light">
              about us
            </span>
            <span className="text-white text-5xl font-semibold tracking-wider">
              {currentItem?.bannerTitle}
            </span>
          </div>
        </div>
        <span className="text-white tracking-widest font-light text-xl mt-4">
          {currentItem?.description}
        </span>
        <ul className="-ml-14 pl-1 mt-12 tracking-widest font-light grid grid-flow-row sm:grid-flow-col w-full list-none justify-center sm:justify-between whitespace-nowrap text-white">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                className="px-3 py-2 flex items-center leading-snug"
                href={"/portfolio" + item.path}
                onClick={handleLinkClick}
              >
                <div
                  className={
                    (item.path === "/" + id &&
                      "border-white border rounded-lg ") +
                    "flex p-3 justify-center items-center w-fit h-fit"
                  }
                >
                  <span>{item.title}</span>
                  {item?.number && (
                    <span className="relative -top-3 px-2 font-thin text-[9px]">
                      {item?.number}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarPortfolio;
