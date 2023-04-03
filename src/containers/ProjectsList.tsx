import PortfolioCard from "@src/components/PortfolioCard";
import React, { FC, useEffect } from "react";

type Props = {
  NumCards: number;
  setNumCards: (value: number) => void;
  maxCards: number;
};

const ProjectsList: FC<Props> = ({ NumCards, setNumCards, maxCards }) => {
  const handleLoadMore = () => {
    if (NumCards + 9 < maxCards) {
      setNumCards(NumCards + 9);
    } else {
      setNumCards(maxCards);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center relative -top-44 px-5 sm:px-20 ">
      {Array(NumCards)
        .fill(true)
        .map((_, i) => (
          <PortfolioCard key={i} path={i.toString()} />
        ))}
      <button
        className="col-span-1 sm:col-span-2 lg:col-span-3"
        onClick={handleLoadMore}
        type="button"
      >
        <span className="font-semibold underline text-gray-800 text-center">
          load more
        </span>
      </button>
    </div>
  );
};

export default ProjectsList;
