import { Icon } from "@iconify/react";
import CarouselCard from "@src/components/CarouselCard";
import React from "react";
import { useSnapCarousel } from "react-snap-carousel";

const Carousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 w-auto h-[485px] -mt-40 sm:-mt-44 z-10 ml-3 md:ml-[210px]">
      <div className="flex flex-row gap-x-4 translate-y-9 md:translate-y-0">
        <button className="relative mr-10" type="button" onClick={() => prev()}>
          <div className="absolute bottom-0 rounded-[50%] border-white border-4 items-center justify-center h-11 w-11">
            <Icon
              icon="tabler:chevron-left"
              fontSize={34}
              className="stroke-2 fill-none text-white"
            />
          </div>
        </button>
        <button className="relative mr-10" type="button" onClick={() => next()}>
          <div className="absolute bottom-0 rounded-[50%] border-white border-4 items-center justify-center h-11 w-11">
            <Icon
              icon="tabler:chevron-right"
              fontSize={34}
              className="stroke-2 fill-none text-white"
            />
          </div>
        </button>
      </div>

      <ul
        className="overflow-hidden box-content flex flex-row gap-7 shrink"
        style={{ scrollSnapType: "x mandatory" }}
        ref={scrollRef}
      >
        <li className="flex shrink-0">
          <CarouselCard />
        </li>
        <li className="flex shrink-0">
          <CarouselCard />
        </li>
        <li className="flex shrink-0">
          <CarouselCard />
        </li>
        <li className="flex shrink-0">
          <CarouselCard />
        </li>
        <li className="flex shrink-0">
          <CarouselCard />
        </li>
        <li className="flex shrink-0">
          <CarouselCard />
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
