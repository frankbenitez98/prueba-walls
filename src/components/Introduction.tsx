import Carousel from "@src/containers/Carousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import astronaut from "../../public/assets/images/astronaut.jpg";
import Button from "./ui/Button";
const Introduction = () => {
  return (
    <div className="flex flex-col h-[1030px] bg-[#27232C] w-screen">
      <div className="w-full relative inline-block text-left">
        <Image
          className="w-full h-[660px] opacity-60"
          src={astronaut}
          alt="astronaut"
        />
        <div className="top-28 left-2 md:left-52  absolute flex flex-col gap-4">
          <span className="font-semibold text-white text-5xl tracking-wider">
            We provide full
          </span>
          <span className="font-semibold text-white text-5xl tracking-wider">
            service for the needs
          </span>
          <span className="font-semibold text-white text-5xl tracking-wider">
            of video production
          </span>
          <div className="mt-3">
            <Link href="/contact">
              <Button title="SHARE YOUR IDEA" />
            </Link>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default Introduction;
