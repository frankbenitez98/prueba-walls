import Image from "next/image";
import React from "react";
import CardImage from "../../public/assets/images/walking-dog.jpg";

const CarouselCard = () => {
  return (
    <div className="flex flex-col gap-y-3 h-[485px] bg-white w-[370px] shrink-0">
      <Image src={CardImage} className="w-auto h-[240px]" />
      <div className="flex flex-col gap-y-2 px-5">
        <span className="font-semibold text-gray-800">Project name</span>
        <span className="font-semibold text-2xl text-gray-800">
          Client: OLX
        </span>
        <span className="text-gray-500">
          Short descirption of the project goes here. Ipsum dolor sit amet,
          consectetur adipiscing elit fsfffee.
        </span>
        <span className="bg-green-100 w-fit px-4 py-1">
          video | video adaptation
        </span>
      </div>
    </div>
  );
};

export default CarouselCard;
