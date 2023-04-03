import React, { FC } from "react";
import IconSvg from "./ui/IconSvg";

type Props = {
  svg?: string;
  title: string;
  description: string[];
  color: string;
};

const SectionCard: FC<Props> = ({ svg, title, description, color }) => {
  return (
    <div className="flex flex-col p-5 bg-[#27232C] w-72 lg:w-[360px] h-60 gap-y-3">
      <div className="flex flex-row gap-4">
        <IconSvg svg={svg as string} />
        <span className="text-white text-5xl font-semibold tracking-wider">
          {title}
        </span>
      </div>

      {description.map((item) => (
        <span key={item} className="text-white tracking-widest font-light">
          {item}
        </span>
      ))}
    </div>
  );
};

export default SectionCard;
