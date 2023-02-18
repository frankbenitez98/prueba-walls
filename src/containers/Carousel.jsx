import CarouselCard from "@src/components/CarouselCard";
import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

const Carousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

  return (
    <div className="flex flex-row gap-4 w-screen h-[485px] -mt-44 z-10 ml-[210px]">
      <button className="relative mr-10" type="button" onClick={() => prev()}>
        <div className="absolute bottom-0 rounded-[50%] border-white border-4 items-center justify-center h-11 w-11">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </div>
      </button>
      <button className="relative mr-10" type="button" onClick={() => next()}>
        <div className="absolute bottom-0 rounded-[50%] border-white border-4 items-center justify-center h-11 w-11">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      </button>
      <ul
        className="overflow-hidden box-content flex flex-row gap-7"
        style={{ scrollSnapType: "x mandatory" }}
        ref={scrollRef}
      >
        <li>
          <CarouselCard />
        </li>
        <li>
          <CarouselCard />
        </li>
        <li>
          <CarouselCard />
        </li>
        <li>
          <CarouselCard />
        </li>
        <li>
          <CarouselCard />
        </li>
        <li>
          <CarouselCard />
        </li>
        <li>
          <CarouselCard />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
