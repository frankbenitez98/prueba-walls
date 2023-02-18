import { Icon } from "@iconify/react";
import React from "react";

const SectionCard = ({ svg, title, description, color }) => {
  return (
    <div className="flex flex-col p-5 bg-[#27232C] w-[360px] h-60 gap-y-3">
      <div className="flex flex-row gap-4">
        <div
          className={`grid rounded-xl bg-${color}-100 h-16 w-16 justify-items-center items-center`}
        >
          <Icon
            icon={"tabler:" + svg}
            className="text-[#27232C] border-[3px] border-[#27232C] rounded-[50%] p-1"
            fontSize={40}
          />
        </div>
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
