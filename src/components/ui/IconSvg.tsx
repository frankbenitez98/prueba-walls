import React, { FC } from "react";
import { Icon } from "@iconify/react";

const IconSvg: FC<{ svg: string }> = ({ svg }) => {
  return (
    <div className="grid rounded-xl bg-green-100 h-16 w-16 justify-items-center items-center">
      <Icon
        icon={"tabler:" + svg}
        className="text-[#27232C] border-[3px] border-[#27232C] rounded-[50%] p-1"
        fontSize={40}
      />
    </div>
  );
};

export default IconSvg;
